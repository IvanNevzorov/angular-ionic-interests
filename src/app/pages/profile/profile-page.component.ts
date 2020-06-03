import { getUserState, AppState } from './../../store/index';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/store/interfaces/user/user.interface';
import { NavController } from '@ionic/angular';
import { CameraService } from '../../services/camera.service';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component..html',
    styleUrls: ['./profile-page.component.scss']
})

export class ProfilePageComponent implements OnInit {
    public segmentValue: string = 'info';
    public imageUrl: String = 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    public userProfile: User;
    public userState$: Observable<User> = this.store$.pipe(select(getUserState));
    public subscruberUser: Subscription;

    constructor(
        private store$: Store<AppState>,
        private navCtrl: NavController,
        private cameraService: CameraService
    ) { }

    ngOnInit() {
        this.subscruberUser = this.userState$.subscribe(user => {
            if (user) {
                this.userProfile = user;
            }
        });
    }

    ionViewWillEnter() {
        this.segmentValue = 'info';
        this.navCtrl.navigateForward('/tabs/profile/info');
    }

    ionViewDidLeave() {
        this.subscruberUser.unsubscribe();
    }

    public takePicture(): void {
        this.cameraService.takePicture().then(imageSrc => {
            if (imageSrc) {
                this.imageUrl = imageSrc;
            }
        });
    }

    public openGallery(): void {
        this.cameraService.openGallery().then(imageSrc => {
            if (imageSrc) {
                this.imageUrl = imageSrc;
            }
        });
    }

    public navigate(event): void {
        this.segmentValue = event.detail.value;
        this.navCtrl.navigateForward(`/tabs/profile/${this.segmentValue}`);
    }
}
