import * as UserReducer from './reducers/user.reducer';
import * as InterestsReducer from './reducers/interests.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

export interface State {
    userState: UserReducer.UserState;
    interestsState: InterestsReducer.InterestsState
}

export const reducers: ActionReducerMap<State> = {
    userState: UserReducer.reducer,
    interestsState: InterestsReducer.reducer
};

export const selectUserStore = (state: State) => state.userState;
export const selectInterestsStore = (state: State) => state.interestsState;

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

