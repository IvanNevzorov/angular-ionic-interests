export interface Interest {
    title: string;
    description: string;
    category: string;
    type: string;
}

export interface Interests {
    [category: string]: Interest[]
}

export interface MealCatigoriesAPI {
    meals: [{
        strCategory: string;
    }];
}

export interface MealAPI {
    meals: [{
        strMeal: string;
        strMealThumb: string;
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
            classifications: [{
                segment: {
                    name: string;
                };
            }];
            images: [{
                url: string;
            }];
        }];

    };
}