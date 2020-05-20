import { User } from './../interfaces/user/user.interface';
import { UserUnionAction, UserActionTypes } from '../actions/user.action';

export interface UserState {
    user: User;
    isLogin: boolean;
}

const initialState: UserState = {
    user: {
        firstName: '',
        secondName: '',
        city: ''
    },
    isLogin: false
};

export const reducer = (state: UserState = initialState, action: UserUnionAction) => {

    switch (action.type) {
        case UserActionTypes.CheckLogin:
            return { ...state };

        case UserActionTypes.SignIn:
            return { ...state, user: action.payload, isLogin: true };

        case UserActionTypes.SignOut:
            return { ...state, isLogin: false };

        default:
            break;
    }
};


