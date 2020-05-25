import { Component, OnInit } from '@angular/core';
import { GraphQLService } from 'src/app/services/graphql.service';
import { InterestFromServer } from 'src/app/store/interfaces/interests/interest-from-server.interface';
import { Store, select } from '@ngrx/store';
import { AppState, getUserState } from 'src/app/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/store/interfaces/user/user.interface';

@Component({
    selector: 'app-my-interests-page',
    templateUrl: './my-interests-page.component.html',
    styleUrls: ['./my-interests-page.component.scss']
})

export class MyInterestsPageComponent implements OnInit {
    public userId: string;
    public userInterests: InterestFromServer[] = [];
    public userState$: Observable<User> = this.store$.pipe(select(getUserState));


    constructor(
        private graphqlService: GraphQLService,
        private store$: Store<AppState>,
    ) { }

    ngOnInit() {
        this.userState$.subscribe((user: User) => {
            this.userId = user._id;
            if (this.userId) {
                this.graphqlService.getInterests(this.userId).subscribe(interests => {
                    this.userInterests = interests;
                });
            }
        });
    }

    public removeInterest(id: string): void {
        this.graphqlService.removeInterest(id).subscribe(isRemove => {
            if (isRemove) {
                console.log(this.userInterests, id);
                this.userInterests = this.userInterests.filter(interest => !interest._id.includes(id));
            }
        });
    }
}
