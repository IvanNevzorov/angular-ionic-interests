import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserAPI } from '../store/interfaces/user.interface';

@Injectable({ providedIn: 'root' })

export class GraphQLService {
    constructor(private http: HttpClient) { }

    public login({ login, password }): Observable<UserAPI> {
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
            map((data: UserAPI) => data)
        )
    }

    public register({ firstName, secondName, city, email, password }): Observable<UserAPI> {
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
        console.log(JSON.parse(body));


        return this.http.post(environment.graphql, body, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
        }).pipe(
            map((data: UserAPI) => data)
        )
    }
}