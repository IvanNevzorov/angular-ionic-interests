import { Interests } from '../interfaces/interests.interface';
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

        case InterestsActionTypes.GetNewsByCategory:
            return { ...state };

        case InterestsActionTypes.NewsByCategoryLoadSuccess:
            return { ...state, news: { ...state.news, [action.payload.category]: action.payload.news } };

        case InterestsActionTypes.AddEventsCategoriesAction:
            return { ...state, catigories: action.payload };

        case InterestsActionTypes.GetEventsByCategory:
            return { ...state };

        case InterestsActionTypes.EventsByCategoryLoadSuccess:
            return { ...state, events: { ...state.events, [action.payload.category]: action.payload.events } };

        case InterestsActionTypes.GetMealCategories:
            return { ...state };

        case InterestsActionTypes.MealCategoriesLoadSuccess:
            return { ...state, catigories: action.payload };

        case InterestsActionTypes.GetMealByCategory:
            return { ...state };

        case InterestsActionTypes.MealByCategoryLoadSuccess:
            return { ...state, meal: { ...state.meal, [action.payload.category]: action.payload.meal } };

        case InterestsActionTypes.InterestsLoadError:
            return { ...state };

        default:
            break;
    }
};


