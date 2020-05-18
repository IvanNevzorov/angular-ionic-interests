import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Store, select } from '@ngrx/store';

import { selectLoginState } from './store'

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    public isLogin: boolean;
    public loginState$: Observable<boolean> = this.store.pipe(select(selectLoginState));
    public subscriber: Subscription;

    constructor(private store: Store, private router: Router) {
        this.loginState$.subscribe(isLoginState => {
            this.isLogin = isLoginState;
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.isLogin;
    }
}
