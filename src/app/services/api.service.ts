import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { EventsAPI } from '../store/interfaces/interests/events-api.interface';
import { NewsAPI } from '../store/interfaces/interests/news-api.interface';
import { MealCatigoriesAPI } from '../store/interfaces/interests/meal-catigories-api.interface';
import { MealAPI } from '../store/interfaces/interests/meal-api.interface';


@Injectable({ providedIn: 'root' })

export class APIService {

    constructor(private httpClient: HttpClient) { }

    public eventsByCategory(category: string): Observable<EventsAPI> {
        return this.httpClient.get(environment.eventsByCategoryUrl, {
            params: new HttpParams()
                .set('segmentName', `${category}`)
                .set('apikey', environment.eventsKey)
                .set('size', '15')
        }).pipe(
            map((data: EventsAPI) => data)
        );
    }

    public newsByCategory(category: string): Observable<NewsAPI> {
        return this.httpClient.get(environment.newsByCategoryUrl, {
            params: new HttpParams()
                .set('category', category)
                .set('apiKey', environment.newsKey)
        }).pipe(
            map((data: NewsAPI) => data)
        );
    }

    public mealCategories(): Observable<MealCatigoriesAPI> {
        return this.httpClient.get(environment.mealCategoriesUrl).pipe(
            map((data: MealCatigoriesAPI) => data)
        );
    }

    public mealByCategory(category: string): Observable<MealAPI> {
        return this.httpClient.get(environment.mealByCategoryUrl, {
            params: new HttpParams()
                .set('c', category)
        }).pipe(
            map((data: MealAPI) => data)
        );
    }
}
