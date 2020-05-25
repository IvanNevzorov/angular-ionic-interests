import { getUserState, AppState } from './../../store/index';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/store/interfaces/user/user.interface';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';



@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component..html'
})

export class ProfilePageComponent implements OnInit {

    constructor(
        private navCtrl: NavController,
        public auth: AuthService
    ) { }

    ngOnInit() {
    }

    public showUserInterests() {
        console.log(this.auth);

        this.navCtrl.navigateForward('/tabs/profile/my-interests');
    }
}
