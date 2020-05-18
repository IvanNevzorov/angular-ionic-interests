export interface User {
    firstName: string;
    secondName: string;
    city: string;
}

export interface UserAPI {
    data: {
        register: User;
    };
    errors: {
        message: string;
    }
}