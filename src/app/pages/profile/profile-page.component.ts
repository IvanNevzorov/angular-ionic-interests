import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectUserState } from 'src/app/store';
import { User } from 'src/app/store/interfaces/user.interface';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component..html'
})

export class ProfilePageComponent implements OnInit {
    public userInfo: User;
    public userState$: Observable<User> = this.store.pipe(select(selectUserState));

    constructor(
        private store: Store
    ) { }

    ngOnInit() {
        this.userState$.subscribe(user => {
            console.log(user);
            if (user) {
                console.log(user);
                this.userInfo = user
            }
        });
    }
}