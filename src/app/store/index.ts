import * as UserReduser from './redusers/user.reduser';
import { ActionReducerMap } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

export interface State {
    userState: UserReduser.UserState;
}

export const reducers: ActionReducerMap<State> = {
    userState: UserReduser.reducer
};

export const selectUserStore = (state: State) => state.userState;

export const selectLoginState = createSelector(
    selectUserStore,
    (userState: UserReduser.UserState) => userState.isLogin
);

export const selectUserState = createSelector(
    selectUserStore,
    (userState: UserReduser.UserState) => userState.user
);

