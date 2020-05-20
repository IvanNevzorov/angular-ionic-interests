import { Action } from '@ngrx/store';
import { Interest } from '../interfaces/interests.interface';

export enum InterestsActionTypes {
    AddNewsCategoriesAction = '[News] Add News Categories Action',
    GetNewsByCategory = '[News] Get News By Categoty',
    NewsByCategoryLoadSuccess = '[News] News By Categoty LoadSuccess',

    GetMealCategories = '[Meal] Get Meal Categories',
    MealCategoriesLoadSuccess = '[Meal] Meal Categories Load Success',
    GetMealByCategory = '[Meal] Get Meal By Category',
    MealByCategoryLoadSuccess = '[Meal] Meal By Category Load Success',

    AddEventsCategoriesAction = '[Events] Add Events Categories',
    GetEventsByCategory = '[Events] Get Events By Category',
    EventsByCategoryLoadSuccess = '[Events] Events By Category Load Success',

    InterestsLoadError = '[Interests] Interests Load Error'
}

export class AddNewsCategoriesAction implements Action {
    readonly type = InterestsActionTypes.AddNewsCategoriesAction;

    constructor(public payload: string[]) { }
}

export class GetNewsByCategoryAction implements Action {
    readonly type = InterestsActionTypes.GetNewsByCategory;

    constructor(public payload: string) { }
}

export class NewsByCategoryLoadSuccessAction implements Action {
    readonly type = InterestsActionTypes.NewsByCategoryLoadSuccess;

    constructor(public payload: { category: string, news: Interest[] }) { }
}

export class GetMealCategoriesAction implements Action {
    readonly type = InterestsActionTypes.GetMealCategories;

    constructor() { }
}

export class MealCategoriesLoadSuccessAction implements Action {
    readonly type = InterestsActionTypes.MealCategoriesLoadSuccess;

    constructor(public payload: string[]) { }
}

export class GetMealByCategoryAction implements Action {
    readonly type = InterestsActionTypes.GetMealByCategory;

    constructor(public payload: string) { }
}

export class MealByCategoryLoadSuccessAction implements Action {
    readonly type = InterestsActionTypes.MealByCategoryLoadSuccess;

    constructor(public payload: { category: string, meal: Interest[] }) { }
}

export class AddEventsCategoriesAction implements Action {
    readonly type = InterestsActionTypes.AddEventsCategoriesAction;

    constructor(public payload: string[]) { }
}

export class GetEventsByCategoryAction implements Action {
    readonly type = InterestsActionTypes.GetEventsByCategory;

    constructor(public payload: string) { }
}

export class EventsByCategoryLoadSuccessAction implements Action {
    readonly type = InterestsActionTypes.EventsByCategoryLoadSuccess;

    constructor(public payload: { category: string, events: Interest[] }) { }
}

export class InterestsLoadErrorAction implements Action {
    readonly type = InterestsActionTypes.InterestsLoadError;

    constructor() { }
}



export type InterestsUnionAction =
    | AddNewsCategoriesAction
    | GetNewsByCategoryAction
    | NewsByCategoryLoadSuccessAction
    | GetMealCategoriesAction
    | MealCategoriesLoadSuccessAction
    | GetMealByCategoryAction
    | MealByCategoryLoadSuccessAction
    | AddEventsCategoriesAction
    | GetEventsByCategoryAction
    | EventsByCategoryLoadSuccessAction
    | InterestsLoadErrorAction