import { User } from './user.interface';

export interface UserLoginAPI {
    data: {
        login: User;
    };
    errors: {
        message: string;
    }
}