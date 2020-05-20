import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { ToastController } from '@ionic/angular';

import {
    InterestsActionTypes,
    GetNewsByCategoryAction,
    NewsByCategoryLoadSuccessAction,
    InterestsLoadErrorAction,
    GetEventsByCategoryAction,
    EventsByCategoryLoadSuccessAction,
    MealByCategoryLoadSuccessAction,
    GetMealByCategoryAction,
    GetMealCategoriesAction,
    MealCategoriesLoadSuccessAction
} from '../actions/interests.action';
import { APIService } from 'src/app/services/api.service';
import { NewsAPI, Interest, EventsAPI, MealAPI, MealCatigoriesAPI } from '../interfaces/interests.interface';
import { SerializeService } from 'src/app/services/serialize.service';

@Injectable({ providedIn: 'root' })

export class WeathersEffecrs {

    @Effect()
    public getNewsByCategory$ = this.actions$.pipe(
        ofType(InterestsActionTypes.GetNewsByCategory),
        mergeMap((action: GetNewsByCategoryAction) =>
            this.apiService.newsByCategory(action.payload).pipe(
                map((newsData: NewsAPI) => {
                    const interest: Interest[] =
                        this.serializeService.newsAPI(newsData);
                    return new NewsByCategoryLoadSuccessAction({ category: action.payload, news: interest });
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
    public getMealCategories$ = this.actions$.pipe(
        ofType(InterestsActionTypes.GetMealCategories),
        mergeMap((action: GetMealCategoriesAction) =>
            this.apiService.mealCategories().pipe(
                map((newsData: MealCatigoriesAPI) => {
                    const categories: string[] =
                        this.serializeService.mealCategoriesAPI(newsData);
                    return new MealCategoriesLoadSuccessAction(categories);
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
    public getMealByCategory$ = this.actions$.pipe(
        ofType(InterestsActionTypes.GetMealByCategory),
        mergeMap((action: GetMealByCategoryAction) =>
            this.apiService.mealByCategory(action.payload).pipe(
                map((newsData: MealAPI) => {
                    const interest: Interest[] =
                        this.serializeService.mealAPI(newsData, action.payload);
                    return new MealByCategoryLoadSuccessAction({ category: action.payload, meal: interest });
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
    public getEventsByCategory$ = this.actions$.pipe(
        ofType(InterestsActionTypes.GetEventsByCategory),
        mergeMap((action: GetEventsByCategoryAction) =>
            this.apiService.eventsByCategory(action.payload).pipe(
                map((newsData: EventsAPI) => {
                    const interest: Interest[] =
                        this.serializeService.eventsAPI(newsData);
                    return new EventsByCategoryLoadSuccessAction({ category: action.payload, events: interest });
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
