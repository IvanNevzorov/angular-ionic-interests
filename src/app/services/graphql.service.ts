import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { UserLoginAPI } from '../store/interfaces/user/user-login-api.interface';
import { UserRegisterAPI } from '../store/interfaces/user/user-register-api.interface';

@Injectable({ providedIn: 'root' })

export class GraphQLService {
    constructor(private http: HttpClient) { }

    public login({ login, password }): Observable<UserLoginAPI> {
        const body = JSON.stringify({
            query: `
            {
                login(login: { email: "${login}", password: "${password}"}) {
                    firstName
                    secondName
                    city
                }
            }
            `
        });

        return this.http.post(environment.graphql, body, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
        }).pipe(
            map((data: UserLoginAPI) => data)
        )
    }

    public register({ firstName, secondName, city, email, password }): Observable<UserRegisterAPI> {
        const body = JSON.stringify({
            query: `
            mutation{
                register(user: {
                    firstName: "${firstName}", 
                    secondName: "${secondName}", 
                    city: "${city}", 
                    email: "${email}", 
                    password: "${password}"
                }) {
                    firstName
                    secondName
                    city
                }
              }
            `
        });

        return this.http.post(environment.graphql, body, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
        }).pipe(
            map((data: UserRegisterAPI) => data)
        )
    }
}