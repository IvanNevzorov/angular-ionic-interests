import { User } from './../interfaces/user/user.interface';
import { Action } from '@ngrx/store';

export enum UserActionTypes {
    CheckLogin = '[User] Check Login',
    SignIn = '[User] Sign In',
    SignOut = '[User] Sign Out'
}

export class CheckLoginAction implements Action {
    readonly type = UserActionTypes.CheckLogin;

    constructor() { }
}

export class UserSignInAction implements Action {
    readonly type = UserActionTypes.SignIn;

    constructor(public payload: User) { }
}

export class UserSignOutAction implements Action {
    readonly type = UserActionTypes.SignOut;

    constructor() { }
}

export type UserUnionAction =
    | CheckLoginAction
    | UserSignInAction
    | UserSignOutAction;
