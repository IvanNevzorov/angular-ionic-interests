import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { EventsAPI, NewsAPI, MealAPI } from '../store/interfaces/interests.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class APIService {

    constructor(private httpClient: HttpClient) { }

    public events(): Observable<EventsAPI> {
        return this.httpClient.get(environment.eventsUrl, {
            params: new HttpParams()
                .set('apikey', environment.eventsKey)
                .set('size', '10')
        }).pipe(
            map((data: EventsAPI) => data)
        );
    }

    public news(): Observable<NewsAPI> {
        return this.httpClient.get(environment.newsUrl, {
            params: new HttpParams().set('apiKey', environment.newsKey)
        }).pipe(
            map((data: NewsAPI) => data)
        );
    }

    public mealRandom(): Observable<MealAPI> {
        return this.httpClient.get(environment.mealRandomUrl).pipe(
            map((data: MealAPI) => data)
        );
    }
}
