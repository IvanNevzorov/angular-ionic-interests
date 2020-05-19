import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { ToastController } from '@ionic/angular';

import {
    InterestsActionTypes,
    GetNewsAction,
    NewsLoadSuccessAction,
    InterestsLoadErrorAction,
    GetEventsAction,
    EventsLoadSuccessAction,
    MealLoadSuccessAction
} from '../actions/interests.action';
import { APIService } from 'src/app/services/api.service';
import { NewsAPI, Interest, EventsAPI, MealAPI } from '../interfaces/interests.interface';
import { SerializeService } from 'src/app/services/serialize.service';

@Injectable({ providedIn: 'root' })

export class WeathersEffecrs {

    @Effect()
    public getNews$ = this.actions$.pipe(
        ofType(InterestsActionTypes.GetNews),
        mergeMap((action: GetNewsAction) =>
            this.apiService.news().pipe(
                map((newsData: NewsAPI) => {
                    const interest: Interest =
                        this.serializeService.newsAPI(newsData);
                    return new NewsLoadSuccessAction(interest);
                }),
                catchError((error) => {
                    this.toastController.create({
                        message: error.message,
                        position: 'top',
                        duration: 3000
                    });
                    return of(new InterestsLoadErrorAction());
                }))
        )
    );

    @Effect()
    public getMeal$ = this.actions$.pipe(
        ofType(InterestsActionTypes.GetNews),
        mergeMap((action: GetNewsAction) =>
            this.apiService.mealRandom().pipe(
                map((newsData: MealAPI) => {
                    const interest: Interest =
                        this.serializeService.mealAPI(newsData);
                    return new MealLoadSuccessAction(interest);
                }),
                catchError((error) => {
                    this.toastController.create({
                        message: error.message,
                        position: 'top',
                        duration: 3000
                    });
                    return of(new InterestsLoadErrorAction());
                }))
        )
    );

    @Effect()
    public getEvents$ = this.actions$.pipe(
        ofType(InterestsActionTypes.GetEvents),
        mergeMap((action: GetEventsAction) =>
            this.apiService.events().pipe(
                map((newsData: EventsAPI) => {
                    const interest: Interest =
                        this.serializeService.eventsAPI(newsData);
                    return new EventsLoadSuccessAction(interest);
                }),
                catchError((error) => {
                    this.toastController.create({
                        message: error.message,
                        position: 'top',
                        duration: 3000
                    });
                    return of(new InterestsLoadErrorAction());
                }))
        )
    );



    constructor(
        private actions$: Actions,
        private apiService: APIService,
        private toastController: ToastController,
        private serializeService: SerializeService
    ) { }

}
