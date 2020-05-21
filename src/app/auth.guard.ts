import { AppState, getUserLoginState } from './store/index';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Store, select } from '@ngrx/store';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    public isLogin = false;
    public loginState$: Observable<boolean> = this.store$.pipe(select(getUserLoginState));
    public subscriber: Subscription;

    constructor(private store$: Store<AppState>, private router: Router) {
        this.loginState$.subscribe(isLoginState => {
            if (isLoginState) {
                this.isLogin = isLoginState;
            }
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.isLogin;
    }
}
