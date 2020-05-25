import { Interests } from './../interfaces/interests/interests.interface';

import { InterestsUnionAction, InterestsActionTypes } from '../actions/interests.action';

export interface InterestsState {
    news: Interests;
    meal: Interests;
    events: Interests;
    categories: string[];
    selectedCategories: string[];
    type: string;
}

const initialInterestState: InterestsState = {
    news: {},
    meal: {},
    events: {},
    categories: [],
    selectedCategories: [],
    type: ''
};

export const reducer = (interestsState: InterestsState = initialInterestState, action: InterestsUnionAction) => {

    switch (action.type) {
        case InterestsActionTypes.AddNewsCategories:
            return { ...interestsState, categories: action.payload };

        case InterestsActionTypes.LoadNewsByCategory:
            return interestsState;

        case InterestsActionTypes.LoadNewsByCategorySuccess:
            return { ...interestsState, news: { ...interestsState.news, [action.payload.category]: action.payload.news } };



        case InterestsActionTypes.AddEventsCategories:
            return { ...interestsState, categories: action.payload };

        case InterestsActionTypes.LoadEventsByCategory:
            return interestsState;

        case InterestsActionTypes.LoadEventsByCategorySuccess:
            return { ...interestsState, events: { ...interestsState.events, [action.payload.category]: action.payload.events } };



        case InterestsActionTypes.LoadMealCategories:
            return interestsState;

        case InterestsActionTypes.LoadMealCategoriesSuccess:
            return { ...interestsState, categories: action.payload };

        case InterestsActionTypes.LoadMealByCategory:
            return interestsState;

        case InterestsActionTypes.LoadMealByCategorySuccess:
            return { ...interestsState, meal: { ...interestsState.meal, [action.payload.category]: action.payload.meal } };


        case InterestsActionTypes.AddSelectedCategories:
            return { ...interestsState, selectedCategories: action.payload };

        case InterestsActionTypes.AddSelectedType:
            return { ...interestsState, type: action.payload };


        case InterestsActionTypes.InterestsLoadError:
            return interestsState;

        default:
            return interestsState;
    }
};


