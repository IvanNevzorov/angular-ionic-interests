import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import {
    AddNewsCategoriesAction,
    AddEventsCategoriesAction,
    LoadMealCategoriesAction,
    AddSelectedTypeAction
} from 'src/app/store/actions/interests.action';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-interests-page',
    templateUrl: './interests-page.component.html',
    styleUrls: ['./interests-page.component.scss']
})

export class InterestsPageComponent {

    constructor(
        public navCtrl: NavController,
        private store$: Store<AppState>,
    ) { }

    public showCategories(type: string): void {
        switch (type) {
            case 'News':
                this.store$.dispatch(new AddNewsCategoriesAction(environment.newsCategories));
                break;

            case 'Events':
                this.store$.dispatch(new AddEventsCategoriesAction(environment.eventsCategories));
                break;

            case 'Meal':
                this.store$.dispatch(new LoadMealCategoriesAction());
                break;

            default:
                break;
        }

        this.store$.dispatch(new AddSelectedTypeAction(type));
        this.navCtrl.navigateForward('/tabs/interests/categories');
    }
}
