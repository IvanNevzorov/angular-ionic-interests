import { getUserState, AppState } from './../../store/index';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/store/interfaces/user/user.interface';
import { NavController } from '@ionic/angular';



@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component..html'
})

export class ProfilePageComponent implements OnInit {
    public userInfo: User;
    public userState$: Observable<User> = this.store$.pipe(select(getUserState));


    constructor(
        private store$: Store<AppState>,
        private navCtrl: NavController
    ) { }

    ngOnInit() {
        this.userState$.subscribe(user => {
            console.log(user);

            if (user) {
                this.userInfo = user;
            }
        });
    }

    public showUserInterests() {
        this.navCtrl.navigateForward('/tabs/profile/my-interests');
    }
}
