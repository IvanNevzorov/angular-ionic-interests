import { Component, OnInit } from '@angular/core';
import { GraphQLService } from 'src/app/services/graphql.service';
import { InterestFromServer } from 'src/app/store/interfaces/interests/interest-from-server.interface';
import { Store, select } from '@ngrx/store';
import { AppState, getUserState } from 'src/app/store';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/store/interfaces/user/user.interface';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
    selector: 'app-my-interests-page',
    templateUrl: './user-interests.component.html',
    styleUrls: ['./user-interests.component.scss']
})

export class UserInterestsComponent implements OnInit {
    public userId: string;
    public userInterests: InterestFromServer[] = [];
    public userState$: Observable<User> = this.store$.pipe(select(getUserState));
    public subscruberUser: Subscription;


    constructor(
        private graphqlService: GraphQLService,
        private store$: Store<AppState>,
        private socialSharing: SocialSharing
    ) { }

    ngOnInit() {
        this.subscruberUser = this.userState$.subscribe((user: User) => {
            this.userId = user._id;
            if (this.userId) {
                this.graphqlService.getInterests(this.userId).subscribe(interests => {
                    this.userInterests = interests;
                });
            }
        });
    }

    ionViewDidLeave() {
        this.subscruberUser.unsubscribe();
    }

    public sharingInterest(interest: InterestFromServer): void {
        this.socialSharing.shareWithOptions({ message: 'Тест Social Sharing' });
    }

    public removeInterest(id: string): void {
        this.graphqlService.removeInterest(id).subscribe(isRemove => {
            if (isRemove) {
                this.userInterests = this.userInterests.filter(interest => !interest._id.includes(id));
            }
        });
    }
}
