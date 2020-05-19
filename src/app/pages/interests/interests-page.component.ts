import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import { SerializeService } from 'src/app/services/serialize.service';
import { selectNewsState, selectMealState, selectEventsState } from './../../store/index';
import { Interests, Interest } from './../../store/interfaces/interests.interface';
import { GetMealAction, GetEventsAction, GetNewsAction } from './../../store/actions/interests.action';

@Component({
    selector: 'app-interests-page',
    templateUrl: './interests-page.component.html',
    styleUrls: ['./interests-page.component.scss']
})

export class InterestsPageComponent implements OnInit {
    public newsState$: Observable<Interests> = this.store.pipe(select(selectNewsState));
    public mealState$: Observable<Interests> = this.store.pipe(select(selectMealState));
    public eventsState$: Observable<Interests> = this.store.pipe(select(selectEventsState));
    public newsInfo: Interest[] = [];
    public mealInfo: Interest[] = [];
    public eventsInfo: Interest[] = [];
    public startInfo: Interest[] = [];

    constructor(
        private store: Store,
        private serializeService: SerializeService
    ) {
        for ( let i = 0 ; i <= 10 ; i++ ) {
            this.store.dispatch(new GetMealAction());
        }
        this.store.dispatch(new GetNewsAction());
        this.store.dispatch(new GetEventsAction());
    }

    ngOnInit() {
        this.newsState$.subscribe(news => {
            this.newsInfo = this.serializeService.interests(news);
            this.completionStartInfo(this.newsInfo);
        });
        this.mealState$.subscribe(meal => {
            this.mealInfo = this.serializeService.interests(meal);
            this.completionStartInfo(this.mealInfo);
        });
        this.eventsState$.subscribe(events => {
            this.eventsInfo = this.serializeService.interests(events);
            this.completionStartInfo(this.eventsInfo);
        });

    }

    public choiseTemplate(event): void {
        console.log(event);
        
    }

    public completionStartInfo(interests: Interest[]) {

        this.startInfo = this.startInfo.concat(interests.slice(2, 5));
    }
}
