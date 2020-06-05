import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { UserSignOutAction } from 'src/app/store/actions/user.action';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-sign-out',
    templateUrl: './sign-out.component.html',
    styleUrls: ['./sign-out.component.scss']
})

export class SignOutComponent implements OnInit {
    constructor(
        private store$: Store<AppState>,
        private navCtrl: NavController
    ) { }

    ngOnInit() { }

    public logOut(): void {
        console.log(1);

        this.store$.dispatch(new UserSignOutAction());
        this.navCtrl.navigateForward(`/tabs/home`);
    }
}
