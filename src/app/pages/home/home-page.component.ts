import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, getUserLoginState } from 'src/app/store';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
    public isLogin = false;
    public loginState$: Observable<boolean> = this.store$.pipe(select(getUserLoginState));

    constructor(
        private navCtrl: NavController,
        private store$: Store<AppState>
    ) { }

    ngOnInit() {
        this.loginState$.subscribe(isLoginState => {
            this.isLogin = isLoginState;
        });
    }

    public navigate(url: string): void {
        this.navCtrl.navigateForward(`/tabs/home/${url}`);
    }

}
