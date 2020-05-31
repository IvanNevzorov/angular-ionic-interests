import { getUserState, AppState } from './../../store/index';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/store/interfaces/user/user.interface';
import { NavController } from '@ionic/angular';
import { CameraService } from '../../services/camera.service'
import { GraphQLService } from 'src/app/services/graphql.service';



@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component..html'
})

export class ProfilePageComponent implements OnInit {
    public image: String = 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    public userInfo: User;
    public userState$: Observable<User> = this.store$.pipe(select(getUserState));


    constructor(
        private store$: Store<AppState>,
        private navCtrl: NavController,
        private cameraService: CameraService,
        private graphqlService: GraphQLService
    ) { }

    ngOnInit() {
        this.userState$.subscribe(user => {
            if (user) {
                this.userInfo = user;
            }
        });
    }

    public showUserInterests(): void {
        this.navCtrl.navigateForward('/tabs/profile/my-interests');
    }

    public makeFoto(): void {
        this.cameraService.takePicture().then(imageSrc => {
            if (imageSrc) {
                this.image = imageSrc;
            }
        });
    }
}
