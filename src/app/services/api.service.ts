import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { EventsAPI, NewsAPI, MealAPI, MealCatigoriesAPI } from '../store/interfaces/interests.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class APIService {

    constructor(private httpClient: HttpClient) { }

    public eventsByCategory(category: string): Observable<EventsAPI> {
        console.log('events');
        
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
        console.log('news');
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
        console.log('meal');
        return this.httpClient.get(environment.mealByCategoryUrl, {
            params: new HttpParams()
                .set('c', category)
        }).pipe(
            map((data: MealAPI) => data)
        );
    }
}
