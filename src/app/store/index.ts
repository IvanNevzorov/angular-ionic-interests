import * as UserReducer from './reducers/user.reducer';
import * as InterestsReducer from './reducers/interests.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { InterestsUnionAction } from './actions/interests.action';
import { UserUnionAction } from './actions/user.action';

export interface AppState {
    userState: UserReducer.UserState;
    interestsState: InterestsReducer.InterestsState;
}

export interface State {
    data: AppState;
}

export const reducers: ActionReducerMap<AppState,  UserUnionAction | InterestsUnionAction> = {
    userState: UserReducer.reducer,
    interestsState: InterestsReducer.reducer
};

export const selectUserStore = (state: AppState) => state.userState;
export const selectInterestsStore = (state: AppState) => state.interestsState;

export const selectLoginState = createSelector(
    selectUserStore,
    (userState: UserReducer.UserState) => userState.isLogin
);

export const selectUserState = createSelector(
    selectUserStore,
    (userState: UserReducer.UserState) => userState.user
);

export const selectNewsState = createSelector(
    selectInterestsStore,
    (interestsState: InterestsReducer.InterestsState) => interestsState.news
);

export const selectMealState = createSelector(
    selectInterestsStore,
    (interestsState: InterestsReducer.InterestsState) => interestsState.meal
);

export const selectEventsState = createSelector(
    selectInterestsStore,
    (interestsState: InterestsReducer.InterestsState) => interestsState.events
);

