import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import {
    AddNewsCategoriesAction,
    AddEventsCategoriesAction,
    LoadMealCategoriesAction
} from 'src/app/store/actions/interests.action';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
    selector: 'app-interests-page',
    templateUrl: './interests-page.component.html',
    styleUrls: ['./interests-page.component.scss']
})

export class InterestsPageComponent {

    constructor(
        private store$: Store<AppState>,
        private router: Router
    ) { }

    public showCategories(type: string): void {
        switch (type) {
            case 'news':
                this.store$.dispatch(new AddNewsCategoriesAction(environment.newsCategories));
                this.router.navigate(['./tabs/interests/news/catigories']);
                break;

            case 'events':
                this.store$.dispatch(new AddEventsCategoriesAction(environment.eventsCategories));
                this.router.navigate(['./']);
                break;

            case 'meal':
                this.store$.dispatch(new LoadMealCategoriesAction());
                this.router.navigate(['./']);
                break;

            default:
                break;
        }
    }
}
