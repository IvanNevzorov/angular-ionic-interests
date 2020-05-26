import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable({ providedIn: 'root' })
export class AuthService {
    isLoggedIn$ = new Subject();
    isLoggedIn: Boolean = false;
    auth0 = new auth0.WebAuth({
        clientID: 'HiF3Zu76qSGY0fODzibGCKlg1gckk2iv',
        domain: 'dev--pxr6qcq.eu.auth0.com',
        responseType: 'token id_token',
        redirectUri: 'http://localhost:8100',
        scope: 'openid'
    });

    constructor(public router: Router) {
        // Check if user is logged In when Initializing
        const loggedIn = this.isLoggedIn = this.isAuthenticated();
        this.isLoggedIn$.next(loggedIn);
    }

    public login(): void {
        this.auth0.authorize();
    }

    public handleAuthentication(): void {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                this.setSession(authResult);
                const loggedIn = this.isLoggedIn = true;
                this.isLoggedIn$.next(loggedIn);
            } else if (err) {
                const loggedIn = this.isLoggedIn = false;
                this.isLoggedIn$.next(loggedIn);
            }
            console.log(authResult);
        });
    }

    private setSession(authResult): void {
        // Set the time that the Access Token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    public logout(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        const loggedIn = this.isLoggedIn = false;
        this.isLoggedIn$.next(loggedIn);
    }

    public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // Access Token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
    }

}