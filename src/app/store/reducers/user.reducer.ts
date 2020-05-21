import { User } from './../interfaces/user/user.interface';
import { UserUnionAction, UserActionTypes } from '../actions/user.action';

export interface UserState {
    user: User;
    isLogin: boolean;
}

const initialUserState: UserState = {
    user: {
        firstName: '',
        secondName: '',
        city: ''
    },
    isLogin: false
};

export const reducer = (userState: UserState = initialUserState, action: UserUnionAction) => {

    switch (action.type) {
        case UserActionTypes.CheckLogin:
            return userState;

        case UserActionTypes.SignIn:
            return { ...userState, user: action.payload, isLogin: true };

        case UserActionTypes.SignOut:
            return { ...userState, isLogin: false };

        default:
            return userState;
    }
};


