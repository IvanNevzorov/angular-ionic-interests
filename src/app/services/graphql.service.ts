import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class GraphQLService {
    constructor(private http: HttpClient) { }

    public login({email, password}) {
        const body = `
            query {
                login(login: {
                email:${email},
                password:${password}
                }){
                    firstName
                    secondName
                    city
                }
            }
        `;

        return this.http.post(environment.graphql, body, {
            headers: new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
        });
    }
}