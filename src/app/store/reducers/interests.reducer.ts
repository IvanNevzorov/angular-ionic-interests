import { Interests } from './../interfaces/interests/interests.interface';

import { InterestsUnionAction, InterestsActionTypes } from '../actions/interests.action';;

export interface InterestsState {
    news: Interests;
    meal: Interests;
    events: Interests;
    catigories: string[];
    type: string;
}

const initialInterestState: InterestsState = {
    news: {},
    meal: {},
    events: {},
    catigories: [],
    type: ''
};

export const reducer = (interestsState: InterestsState = initialInterestState, action: InterestsUnionAction) => {

    switch (action.type) {
        case InterestsActionTypes.AddNewsCategoriesAction:
            return { ...interestsState, catigories: action.payload };

        case InterestsActionTypes.LoadNewsByCategory:
            return interestsState;

        case InterestsActionTypes.LoadNewsByCategorySuccess:
            return { ...interestsState, news: { ...interestsState.news, [action.payload.category]: action.payload.news } };

        case InterestsActionTypes.AddEventsCategoriesAction:
            return { ...interestsState, catigories: action.payload };

        case InterestsActionTypes.LoadEventsByCategory:
            return interestsState;

        case InterestsActionTypes.LoadEventsByCategorySuccess:
            return { ...interestsState, events: { ...interestsState.events, [action.payload.category]: action.payload.events } };

        case InterestsActionTypes.LoadMealCategories:
            return interestsState;

        case InterestsActionTypes.LoadMealCategoriesSuccess:
            return { ...interestsState, catigories: action.payload };

        case InterestsActionTypes.LoadMealByCategory:
            return interestsState;

        case InterestsActionTypes.LoadMealByCategorySuccess:
            return { ...interestsState, meal: { ...interestsState.meal, [action.payload.category]: action.payload.meal } };

        case InterestsActionTypes.InterestsLoadError:
            return interestsState;

        default:
            return interestsState;
    }
};


