import { Injectable } from '@angular/core';
import { MealAPI, Interest, NewsAPI, EventsAPI, MealCatigoriesAPI } from '../store/interfaces/interests.interface';

@Injectable({ providedIn: 'root' })

export class SerializeService {
    constructor() { }

    public mealCategoriesAPI(mealCategoriesAPI: MealCatigoriesAPI): string[] {
        const result: string[] = [];
        mealCategoriesAPI.meals.forEach(item => {
            result.push(item.strCategory);
        });
        return result;
    }

    public mealAPI(mealAPI: MealAPI, category: string): Interest[] {
        const result: Interest[] = [];
        mealAPI.meals.forEach(item => {
            result.push({
                title: item.strMeal,
                description: item.strMealThumb,
                category,
                type: 'meal'
            });
        });
        console.log(`meal ${result}`);
        return result;
    }

    public newsAPI(newsAPI: NewsAPI): Interest[] {
        const result: Interest[] = [];
        newsAPI.news.forEach(item => {
            result.push({
                title: item.title,
                description: item.description,
                category: item.category[0],
                type: 'news'
            });
        });
        console.log(`news ${result}`);
        return result;
    }

    public eventsAPI(eventsAPI: EventsAPI): Interest[] {
        const result: Interest[] = [];
        eventsAPI._embedded.events.forEach(item => {
            result.push({
                title: item.name,
                description: item.images[0].url,
                category: item.classifications[0].segment.name,
                type: 'events'
            });
        });
        console.log(`events ${result}`);
        return result;
    }
}
