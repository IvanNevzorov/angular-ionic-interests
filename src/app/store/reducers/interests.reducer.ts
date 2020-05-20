import { Interests } from './../interfaces/interests/interests.interface';

import { InterestsUnionAction, InterestsActionTypes } from '../actions/interests.action';

export interface InterestsState {
    news: Interests;
    meal: Interests;
    events: Interests;
    catigories: string[];
    type: string;
}

const initialState: InterestsState = {
    news: {},
    meal: {},
    events: {},
    catigories: [],
    type: ''
};

export const reducer = (state: InterestsState = initialState, action: InterestsUnionAction) => {

    switch (action.type) {
        case InterestsActionTypes.AddNewsCategoriesAction:
            return { ...state, catigories: action.payload };

        case InterestsActionTypes.LoadNewsByCategory:
            console.log('get News');
            return { ...state };

        case InterestsActionTypes.LoadNewsByCategorySuccess:
            return { ...state, news: { ...state.news, [action.payload.category]: action.payload.news } };

        case InterestsActionTypes.AddEventsCategoriesAction:
            return { ...state, catigories: action.payload };

        case InterestsActionTypes.LoadEventsByCategory:
            console.log('get Events');
            return { ...state };

        case InterestsActionTypes.LoadEventsByCategorySuccess:
            return { ...state, events: { ...state.events, [action.payload.category]: action.payload.events } };

        case InterestsActionTypes.LoadMealCategories:
            return { ...state };

        case InterestsActionTypes.LoadMealCategoriesSuccess:
            return { ...state, catigories: action.payload };

        case InterestsActionTypes.LoadMealByCategory:
            console.log('get Meal');
            return { ...state };

        case InterestsActionTypes.LoadMealByCategorySuccess:
            return { ...state, meal: { ...state.meal, [action.payload.category]: action.payload.meal } };

        case InterestsActionTypes.InterestsLoadError:
            return { ...state };

        default:
            break;
    }
};


