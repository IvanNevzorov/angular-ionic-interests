import { Interest } from './../interfaces/interests/interest.interface';
import { Action } from '@ngrx/store';

export enum InterestsActionTypes {
    AddNewsCategories = '[News] Add News Categories Action',
    LoadNewsByCategory = '[News] Load News By Category',
    LoadNewsByCategorySuccess = '[News] Load News By Category Success',
    LoadNewsByCategoryError = '[News] Load News By Category Error',

    LoadMealCategories = '[Meal] Load Meal Categories',
    LoadMealCategoriesSuccess = '[Meal] Load Meal Categories Success',
    LoadMealCategoriesError = '[Meal] Load Meal Categories Error',
    LoadMealByCategory = '[Meal] Load Meal By Category',
    LoadMealByCategorySuccess = '[Meal] Load Meal By Category Success',
    LoadMealByCategoryError = '[Meal] Load Meal By Category Error',

    AddEventsCategories = '[Events] Add Events Categories',
    LoadEventsByCategory = '[Events] Load Events By Category',
    LoadEventsByCategorySuccess = '[Events] Load Events By Category Success',
    LoadEventsByCategoryError = '[Events] Load Events By Category Error',

    AddSelectedCategories = '[Categories] Add Selected Categories',

    AddSelectedType = '[Interests] Add Selected Type',
    InterestsLoadError = '[Interests] Interests Load Error'
}

export class AddNewsCategoriesAction implements Action {
    readonly type = InterestsActionTypes.AddNewsCategories;

    constructor(public payload: string[]) { }
}

export class LoadNewsByCategoryAction implements Action {
    readonly type = InterestsActionTypes.LoadNewsByCategory;

    constructor(public payload: string) { }
}

export class LoadNewsByCategorySuccessAction implements Action {
    readonly type = InterestsActionTypes.LoadNewsByCategorySuccess;

    constructor(public payload: { category: string, news: Interest[] }) { }
}

export class LoadNewsByCategoryErrorAction implements Action {
    readonly type = InterestsActionTypes.LoadNewsByCategoryError;

    constructor() { }
}


export class LoadMealCategoriesAction implements Action {
    readonly type = InterestsActionTypes.LoadMealCategories;

    constructor() { }
}

export class LoadMealCategoriesSuccessAction implements Action {
    readonly type = InterestsActionTypes.LoadMealCategoriesSuccess;

    constructor(public payload: string[]) { }
}

export class LoadMealCategoriesErrorAction implements Action {
    readonly type = InterestsActionTypes.LoadMealCategoriesError;

    constructor() { }
}

export class LoadMealByCategoryAction implements Action {
    readonly type = InterestsActionTypes.LoadMealByCategory;

    constructor(public payload: string) { }
}

export class LoadMealByCategorySuccessAction implements Action {
    readonly type = InterestsActionTypes.LoadMealByCategorySuccess;

    constructor(public payload: { category: string, meal: Interest[] }) { }
}

export class LoadMealByCategoryErrorAction implements Action {
    readonly type = InterestsActionTypes.LoadMealByCategoryError;

    constructor() { }
}


export class AddEventsCategoriesAction implements Action {
    readonly type = InterestsActionTypes.AddEventsCategories;

    constructor(public payload: string[]) { }
}

export class LoadEventsByCategoryAction implements Action {
    readonly type = InterestsActionTypes.LoadEventsByCategory;

    constructor(public payload: string) { }
}

export class LoadEventsByCategorySuccessAction implements Action {
    readonly type = InterestsActionTypes.LoadEventsByCategorySuccess;

    constructor(public payload: { category: string, events: Interest[] }) { }
}

export class LoadEventsByCategoryErrorAction implements Action {
    readonly type = InterestsActionTypes.LoadEventsByCategoryError;

    constructor() { }
}

export class AddSelectedCategoriesAction implements Action {
    readonly type = InterestsActionTypes.AddSelectedCategories;

    constructor(public payload: string[]) { }
}

export class AddSelectedTypeAction implements Action {
    readonly type = InterestsActionTypes.AddSelectedType;

    constructor(public payload: string) { }
}

export class InterestsLoadErrorAction implements Action {
    readonly type = InterestsActionTypes.InterestsLoadError;

    constructor() { }
}



export type InterestsUnionAction =
    | AddNewsCategoriesAction
    | LoadNewsByCategoryAction
    | LoadNewsByCategorySuccessAction
    | LoadNewsByCategoryErrorAction
    | LoadMealCategoriesAction
    | LoadMealCategoriesSuccessAction
    | LoadMealCategoriesErrorAction
    | LoadMealByCategoryAction
    | LoadMealByCategorySuccessAction
    | LoadMealByCategoryErrorAction
    | AddEventsCategoriesAction
    | LoadEventsByCategoryAction
    | LoadEventsByCategorySuccessAction
    | LoadEventsByCategoryErrorAction
    | AddSelectedCategoriesAction
    | AddSelectedTypeAction
    | InterestsLoadErrorAction;
