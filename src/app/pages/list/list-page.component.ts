import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
    AppState,
    getSelectedCategoriesState,
    getTypeInterestsState,
    getNewsState,
    getEventsState,
    getMealState,
    getUserState
} from 'src/app/store';
import { Interests } from 'src/app/store/interfaces/interests/interests.interface';
import { Interest } from 'src/app/store/interfaces/interests/interest.interface';
import { User } from 'src/app/store/interfaces/user/user.interface';
import { GraphQLService } from 'src/app/services/graphql.service';
import { IsPushBtn } from 'src/app/store/interfaces/interests/is-push-btn.interface';

@Component({
    selector: 'app-list-component',
    templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.scss']
})

export class ListPageComponent implements OnInit {
    public userId: string;
    public newsInfo: Interest[] = [];
    public eventsInfo: Interest[] = [];
    public mealInfo: Interest[] = [];
    public isPushBtn: IsPushBtn = {};
    public selectedTypeInfo = '';
    public selectedCategoriesInfo: string[] = [];
    public selectedCategoriesState$: Observable<string[]> = this.store$.pipe(select(getSelectedCategoriesState));
    public selectedTypeState$: Observable<string> = this.store$.pipe(select(getTypeInterestsState));
    public newsState$: Observable<Interests> = this.store$.pipe(select(getNewsState));
    public eventsState$: Observable<Interests> = this.store$.pipe(select(getEventsState));
    public mealState$: Observable<Interests> = this.store$.pipe(select(getMealState));
    public userState$: Observable<User> = this.store$.pipe(select(getUserState));
    public subscruberUser: Subscription;
    public subscruberMeal: Subscription;
    public subscruberEvents: Subscription;
    public subscruberNews: Subscription;
    public subscruberType: Subscription;
    public subscruberCategories: Subscription;

    constructor(
        private store$: Store<AppState>,
        private graphqlService: GraphQLService
    ) { }

    ngOnInit() {
        this.getSubscriptions();
    }

    ionViewDidLeave() {
        this.unsubscribeFromSubscriptions();
    }

    private getInterestsByCategories(listInterests: Interests): Interest[] {
        let interests: Interest[] = [];
        this.selectedCategoriesInfo.forEach(category => {
            if (listInterests[category]) {
                listInterests[category].forEach(interest => {
                    if (this.selectedTypeInfo === 'News') {
                        this.isPushBtn[interest.title] = true;
                    } else {
                        this.isPushBtn[interest.id] = true;
                    }
                });
                interests = interests.concat(listInterests[category]);
            }
        });
        return interests;
    }

    public addInterestToProfile(event, interest: Interest): void {
        event.target.disabled = true;
        this.graphqlService.createInterest(interest, this.userId).subscribe(isCreate => {
            if (isCreate) {
                if (this.selectedTypeInfo === 'News') {
                    this.isPushBtn[interest.title] = false;
                } else {
                    this.isPushBtn[interest.id] = false;
                }
            }
        });
    }

    public getSubscriptions(): void {
        this.subscruberUser = this.userState$.subscribe((user: User) => {
            this.userId = user._id;
        });

        this.subscruberType = this.selectedTypeState$.subscribe((type: string) => {
            this.selectedTypeInfo = type;
        });

        this.subscruberCategories = this.selectedCategoriesState$.subscribe((categories: string[]) => {
            this.selectedCategoriesInfo = categories;
        });

        this.subscruberNews = this.newsState$.subscribe((news: Interests) => {
            this.newsInfo = this.getInterestsByCategories(news);
        });

        this.subscruberEvents = this.eventsState$.subscribe((events: Interests) => {
            this.eventsInfo = this.getInterestsByCategories(events);
        });

        this.subscruberMeal = this.mealState$.subscribe((meal: Interests) => {
            this.mealInfo = this.getInterestsByCategories(meal);
        });
    }

    public unsubscribeFromSubscriptions(): void {
        this.subscruberUser.unsubscribe();
        this.subscruberType.unsubscribe();
        this.subscruberCategories.unsubscribe();
        this.subscruberNews.unsubscribe();
        this.subscruberEvents.unsubscribe();
        this.subscruberMeal.unsubscribe();
    }
}
