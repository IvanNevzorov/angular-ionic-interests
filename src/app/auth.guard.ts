import { AppState, getUserLoginState } from './store/index';
import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { NavController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    public isLogin = false;
    public loginState$: Observable<boolean> = this.store$.pipe(select(getUserLoginState));

    constructor(
        private store$: Store<AppState>,
        private navCtrl: NavController
    ) {
        this.loginState$.subscribe(isLoginState => {
            if (isLoginState) {
                this.isLogin = isLoginState;
            }
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.isLogin) this.navCtrl.navigateForward('/tabs');
        return this.isLogin;
    }
}
