import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { ToastController } from '@ionic/angular';

import { APIService } from 'src/app/services/api.service';
import { SerializeService } from 'src/app/services/serialize.service';
import {
    InterestsActionTypes,
    LoadNewsByCategoryAction,
    LoadNewsByCategorySuccessAction,
    LoadNewsByCategoryErrorAction,
    LoadMealCategoriesAction,
    LoadMealCategoriesSuccessAction,
    LoadMealCategoriesErrorAction,
    LoadMealByCategoryAction,
    LoadMealByCategorySuccessAction,
    LoadMealByCategoryErrorAction,
    LoadEventsByCategoryAction,
    LoadEventsByCategorySuccessAction,
    LoadEventsByCategoryErrorAction
} from './../actions/interests.action';
import { EventsAPI } from './../interfaces/interests/events-api.interface';
import { MealCatigoriesAPI } from './../interfaces/interests/meal-catigories-api.interface';
import { Interest } from './../interfaces/interests/interest.interface';
import { NewsAPI } from './../interfaces/interests/news-api.interface';
import { MealAPI } from './../interfaces/interests/meal-api.interface';

@Injectable({ providedIn: 'root' })

export class InterestsEffecrs {

    @Effect()
    public loadNewsByCategory$ = this.actions$.pipe(
        ofType(InterestsActionTypes.LoadNewsByCategory),
        mergeMap((action: LoadNewsByCategoryAction) =>
            this.apiService.newsByCategory(action.payload).pipe(
                map((newsData: NewsAPI) => {
                    const interest: Interest[] =
                        this.serializeService.newsAPI(newsData);
                    return new LoadNewsByCategorySuccessAction({ category: action.payload, news: interest });
                }),
                catchError((error) => {
                    this.toastController.create({
                        message: error.message,
                        position: 'top',
                        duration: 3000
                    });
                    return of(new LoadNewsByCategoryErrorAction());
                }))
        )
    );

    @Effect()
    public loadMealCategories$ = this.actions$.pipe(
        ofType(InterestsActionTypes.LoadMealCategories),
        mergeMap((action: LoadMealCategoriesAction) =>
            this.apiService.mealCategories().pipe(
                map((newsData: MealCatigoriesAPI) => {
                    const categories: string[] =
                        this.serializeService.mealCategoriesAPI(newsData);
                    return new LoadMealCategoriesSuccessAction(categories);
                }),
                catchError((error) => {
                    this.toastController.create({
                        message: error.message,
                        position: 'top',
                        duration: 3000
                    });
                    return of(new LoadMealCategoriesErrorAction());
                }))
        )
    );

    @Effect()
    public loadMealByCategory$ = this.actions$.pipe(
        ofType(InterestsActionTypes.LoadMealByCategory),
        mergeMap((action: LoadMealByCategoryAction) =>
            this.apiService.mealByCategory(action.payload).pipe(
                map((mealData: MealAPI) => {
                    const interest: Interest[] =
                        this.serializeService.mealAPI(mealData, action.payload);
                    return new LoadMealByCategorySuccessAction({ category: action.payload, meal: interest });
                }),
                catchError((error) => {
                    this.toastController.create({
                        message: error.message,
                        position: 'top',
                        duration: 3000
                    });
                    return of(new LoadMealByCategoryErrorAction());
                }))
        )
    );

    @Effect()
    public loadEventsByCategory$ = this.actions$.pipe(
        ofType(InterestsActionTypes.LoadEventsByCategory),
        mergeMap((action: LoadEventsByCategoryAction) =>
            this.apiService.eventsByCategory(action.payload).pipe(
                map((newsData: EventsAPI) => {
                    const interest: Interest[] =
                        this.serializeService.eventsAPI(newsData);
                    return new LoadEventsByCategorySuccessAction({ category: action.payload, events: interest });
                }),
                catchError((error) => {
                    this.toastController.create({
                        message: error.message,
                        position: 'top',
                        duration: 3000
                    });
                    return of(new LoadEventsByCategoryErrorAction());
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
