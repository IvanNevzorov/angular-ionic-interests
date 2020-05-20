import { User } from './user.interface';

export interface UserRegisterAPI {
    data: {
        register: User;
    };
    errors: {
        message: string;
    }
}