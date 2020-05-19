export interface Interest {
    title: string;
    description: string;
    category: string;
    type: string;
}

export interface Interests {
    [title: string]: Interest
}

export interface MealAPI {
    meals: [{
        strMeal: string;
        strCategory: string;
        strInstructions: string;
    }];
}

export interface NewsAPI {
    news: [{
        title: string;
        description: string;
        category: string[];
    }];
}

export interface EventsAPI {
    _embedded: {
        events: [{
            name: string;
            accessibility: {
                info: string;
            };
        }];
        classifications: [{
            genre: {
                name: string;
            };
        }];
    };
}