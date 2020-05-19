import { Action } from '@ngrx/store';
import { User } from '../interfaces/user.interface';
import { Interest } from '../interfaces/interests.interface';

export enum InterestsActionTypes {
    GetNews = '[News] Get News',
    NewsLoadSuccess = '[News] News Load Success',

    GetMeal = '[Meal] Get Meal',
    MealLoadSuccess = '[Meal] Meal Load Success',

    GetEvents = '[Events] Get Events',
    EventsLoadSuccess = '[Events] Events Load Success',

    InterestsLoadError = '[Interests] Interests Load Error'
}

export class GetNewsAction implements Action {
    readonly type = InterestsActionTypes.GetNews;

    constructor() { }
}

export class NewsLoadSuccessAction implements Action {
    readonly type = InterestsActionTypes.NewsLoadSuccess;

    constructor(public payload: Interest) { }
}

export class GetMealAction implements Action {
    readonly type = InterestsActionTypes.GetMeal;

    constructor() { }
}

export class MealLoadSuccessAction implements Action {
    readonly type = InterestsActionTypes.MealLoadSuccess;

    constructor(public payload: Interest) { }
}

export class GetEventsAction implements Action {
    readonly type = InterestsActionTypes.GetEvents;

    constructor() { }
}

export class EventsLoadSuccessAction implements Action {
    readonly type = InterestsActionTypes.EventsLoadSuccess;

    constructor(public payload: Interest) { }
}

export class InterestsLoadErrorAction implements Action {
    readonly type = InterestsActionTypes.InterestsLoadError;

    constructor() { }
}



export type InterestsUnionAction =
    | GetNewsAction
    | NewsLoadSuccessAction
    | GetMealAction
    | MealLoadSuccessAction
    | GetEventsAction
    | EventsLoadSuccessAction
    | InterestsLoadErrorAction