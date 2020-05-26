import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { UserLoginAPI } from '../store/interfaces/user/user-login-api.interface';
import { UserRegisterAPI } from '../store/interfaces/user/user-register-api.interface';
import { Interest } from '../store/interfaces/interests/interest.interface';
import { InterestFromServer } from '../store/interfaces/interests/interest-from-server.interface';
import { GetInterestsAPI } from '../store/interfaces/interests/get-interests-api.interface';
import { RemoveInterestAPI } from '../store/interfaces/interests/remove-interest-api.interface';
import { CreateInterestAPI } from '../store/interfaces/interests/create-interest-api.interface';

@Injectable({ providedIn: 'root' })

export class GraphQLService {
    constructor(private http: HttpClient) { }

    public login({ login, password }): Observable<UserLoginAPI> {
        const body = JSON.stringify({
            query: `
            {
                login(login: { email: "${login}", password: "${password}"}) {
                    _id
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
        );
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
                    _id
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
        );
    }

    public createInterest({ title, description, category, type }: Interest, user: string): Observable<boolean> {
        const body = JSON.stringify({
            query: `
            mutation {
                createInterest(interest: {
                  title: "${title}",
                  description: "${description}",
                  category: "${category}",
                  type: "${type}",
                  user: "${user}"
                })
            }
            `
        });

        return this.http.post(environment.graphql, body, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
        }).pipe(
            map((response: CreateInterestAPI) => response.data.createInterest)
        );
    }

    public removeInterest(id: string): Observable<boolean> {
        const body = JSON.stringify({
            query: `
            mutation {
                deleteInterest(
                    id: "${id}"
                )
            }
            `
        });

        return this.http.post(environment.graphql, body, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
        }).pipe(
            map((response: RemoveInterestAPI) => response.data.deleteInterest)
        );
    }

    public getInterests(id: string): Observable<InterestFromServer[]> {
        const body = JSON.stringify({
            query: `
            {
                getInterests(
                    id: "${id}"
                ){
                  _id
                  title
                  description
                  category
                  type
                }
            }
            `
        });

        return this.http.post(environment.graphql, body, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
        }).pipe(
            map((response: GetInterestsAPI) => response.data.getInterests)
        );
    }
}
