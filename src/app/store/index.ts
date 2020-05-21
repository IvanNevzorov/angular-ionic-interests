import * as UserReducer from './reducers/user.reducer';
import * as InterestsReducer from './reducers/interests.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { InterestsUnionAction } from './actions/interests.action';
import { UserUnionAction } from './actions/user.action';

export interface AppState {
    userState: UserReducer.UserState;
    interestsState: InterestsReducer.InterestsState;
}

export const reducers: ActionReducerMap<AppState, UserUnionAction | InterestsUnionAction> = {
    userState: UserReducer.reducer,
    interestsState: InterestsReducer.reducer
};

export const getInterestsEntitiesStore = (state: AppState) => state.interestsState;
export const getUserEntitiesStore = (state: AppState) => state.userState;

export const getUserLoginState = createSelector(
    getUserEntitiesStore,
    (userState: UserReducer.UserState) => userState.isLogin
);

export const getUserState = createSelector(
    getUserEntitiesStore,
    (userState: UserReducer.UserState) => userState.user
);

export const getNewsState = createSelector(
    getInterestsEntitiesStore,
    (interestsState: InterestsReducer.InterestsState) => interestsState.news
);

export const getMealState = createSelector(
    getInterestsEntitiesStore,
    (interestsState: InterestsReducer.InterestsState) => interestsState.meal
);

export const getEventsState = createSelector(
    getInterestsEntitiesStore,
    (interestsState: InterestsReducer.InterestsState) => interestsState.events
);

