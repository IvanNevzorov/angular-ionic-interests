import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import { SerializeService } from 'src/app/services/serialize.service';
import { selectNewsState, selectMealState, selectEventsState } from './../../store/index';
import { Interests, Interest } from './../../store/interfaces/interests.interface';
import { APIService } from 'src/app/services/api.service';
import { State } from './../../store/index';
import { LoadNewsByCategoryAction, LoadEventsByCategoryAction, LoadMealByCategoryAction } from 'src/app/store/actions/interests.action';

@Component({
    selector: 'app-interests-page',
    templateUrl: './interests-page.component.html',
    styleUrls: ['./interests-page.component.scss']
})

export class InterestsPageComponent implements OnInit {
    public newsState$: Observable<Interests> = this.store$.pipe(select(selectNewsState));
    public mealState$: Observable<Interests> = this.store$.pipe(select(selectMealState));
    public eventsState$: Observable<Interests> = this.store$.pipe(select(selectEventsState));
    public newsInfo: Interest[] = [];
    public mealInfo: Interest[] = [];
    public eventsInfo: Interest[] = [];
    public startInfo: Interest[] = [];

    constructor(
        private store$: Store<State>,
        private serializeService: SerializeService,
        private apiService: APIService
    ) { }

    ngOnInit() {
        this.store$.dispatch(new LoadNewsByCategoryAction('game'));
        this.store$.dispatch(new LoadEventsByCategoryAction('music'));
        this.store$.dispatch(new LoadMealByCategoryAction('Beef'));
        this.newsState$.subscribe(data => console.log(data));
        this.mealState$.subscribe(data => console.log(data));
        this.eventsState$.subscribe(data => console.log(data));
    }

    public choiseTemplate(event): void {
        console.log(event);
    }

}
