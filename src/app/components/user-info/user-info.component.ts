import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/store/interfaces/user/user.interface';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState, getUserState } from 'src/app/store';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html'
})

export class UserInfoComponent implements OnInit {
    public birthDate: Date = null;
    public userProfile: User;
    public userState$: Observable<User> = this.store$.pipe(select(getUserState));
    public subscruberUser: Subscription;

    constructor(private store$: Store<AppState>) { }

    ngOnInit() {
        this.subscruberUser = this.userState$.subscribe(user => {
            if (user) {
                this.userProfile = user;
            }
        });
    }

    ionViewDidLeave() {
        this.subscruberUser.unsubscribe();
    }
}