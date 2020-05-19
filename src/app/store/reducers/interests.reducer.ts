import { Interests } from '../interfaces/interests.interface';
import { InterestsUnionAction, InterestsActionTypes } from '../actions/interests.action';

export interface InterestsState {
    news: Interests;
    meal: Interests;
    events: Interests;
}

const initialState: InterestsState = {
    news: {},
    meal: {},
    events: {}
};

export const reducer = (state: InterestsState = initialState, action: InterestsUnionAction) => {

    switch (action.type) {
        case InterestsActionTypes.GetNews:
            return { ...state };

        case InterestsActionTypes.NewsLoadSuccess:
            return { ...state, news: { ...state.news, [action.payload.title]: action.payload } };

        case InterestsActionTypes.GetEvents:
            return { ...state };

        case InterestsActionTypes.EventsLoadSuccess:
            return { ...state, events: { ...state.events, [action.payload.title]: action.payload } };

        case InterestsActionTypes.GetMeal:
            return { ...state };

        case InterestsActionTypes.MealLoadSuccess:
            return { ...state, meal: { ...state.meal, [action.payload.title]: action.payload } };

        case InterestsActionTypes.InterestsLoadError:
            return { ...state };

        default:
            break;
    }
};


