import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/store/interfaces/user/user.interface';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, getUserState } from 'src/app/store';
import { AlertController, LoadingController } from '@ionic/angular';
import { GraphQLService } from 'src/app/services/graphql.service';
import { UserUpdateAPI } from 'src/app/store/interfaces/user/user-update-api.interface';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html'
})

export class UserInfoComponent implements OnInit {
    public birthDate: Date = null;
    public userProfile: User;
    public userState$: Observable<User> = this.store$.pipe(select(getUserState));
    public subscruberUser: Subscription;

    constructor(
        private store$: Store<AppState>,
        private alertCtrl: AlertController,
        private loading: LoadingController,
        private graphqlService: GraphQLService
    ) { }

    ngOnInit() {
        this.subscruberUser = this.userState$.subscribe(user => {
            if (user) {
                this.userProfile = user;
            }
        });
    }

    ionViewDidLeave() {
        this.subscruberUser.unsubscribe();
    }

    public async updateName(): Promise<void> {
        const alert = await this.alertCtrl.create({
            subHeader: 'Your first and second name',
            inputs: [
                {
                    type: 'text',
                    name: 'firstName',
                    placeholder: 'Your first name',
                    value: this.userProfile.firstName,
                },
                {
                    type: 'text',
                    name: 'secondName',
                    placeholder: 'Your second name',
                    value: this.userProfile.secondName,
                },
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: data => {
                        const loader = this.loading.create({
                            message: 'Updating name...'
                        }).then((load) => load.present());
                        console.log(data);

                        this.graphqlService.updateUser(this.userProfile._id, data.firstName, 'firstName')
                            .subscribe((update: UserUpdateAPI) => {
                                if (update.data) {
                                    console.log('load');
                                }
                                this.loading.dismiss();
                            });
                        this.graphqlService.updateUser(this.userProfile._id, data.secondName, 'secondName')
                            .subscribe((update: UserUpdateAPI) => {
                                if (update.data) {
                                    console.log('load');

                                    this.loading.dismiss();
                                }
                                this.loading.dismiss();
                            });

                    }
                },
            ]
        });
        await alert.present();
    }
}
