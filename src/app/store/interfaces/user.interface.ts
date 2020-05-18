export interface User {
    firstName: string;
    secondName: string;
    city: string;
}

export interface UserRegisterAPI {
    data: {
        register: User;
    };
    errors: {
        message: string;
    }
}

export interface UserLoginAPI {
    data: {
        login: User;
    };
    errors: {
        message: string;
    }
}