import { Injectable } from '@angular/core';
import { MealAPI, Interest, NewsAPI, EventsAPI } from '../store/interfaces/interests.interface';

@Injectable({ providedIn: 'root' })

export class SerializeService {
    constructor() { }

    public mealAPI(mealAPI: MealAPI): Interest {
        const { strMeal, strInstructions, strCategory } = mealAPI.meals[0]
        return {
            title: strMeal,
            description: strInstructions,
            category: strCategory,
            type: 'meal'
        }
    };

    public newsAPI(newsAPI: NewsAPI): Interest {
        const { title, description, category } = newsAPI.news[0]
        return {
            title,
            description,
            category: category[0],
            type: 'news'
        }
    };

    public eventsAPI(eventsAPI: EventsAPI): Interest {
        const { events, classifications } = eventsAPI._embedded
        return {
            title: events[0].name,
            description: events[0].accessibility.info,
            category: classifications[0].genre.name,
            type: 'events'
        }
    };
}