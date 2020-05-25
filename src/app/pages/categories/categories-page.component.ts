import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, getCategoriesState, getTypeInterestsState } from 'src/app/store';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { AddSelectedCategoriesAction, LoadNewsByCategoryAction, LoadEventsByCategoryAction, LoadMealByCategoryAction } from 'src/app/store/actions/interests.action';

@Component({
    selector: 'app-categories-page',
    templateUrl: './categories-page.component.html',
    styleUrls: ['./categories-page.component.scss']
})

export class CategoriesPageComponent implements OnInit {
    public categoriesInfo: string[] = [];
    public selectedCategories: string[] = [];
    public selectedTypeInfo = '';
    public categoriesState$: Observable<string[]> = this.store$.pipe(select(getCategoriesState));
    public selectedTypeState$: Observable<string> = this.store$.pipe(select(getTypeInterestsState));

    constructor(
        private store$: Store<AppState>,
        private navCtrl: NavController
    ) { }

    ngOnInit() {
        this.selectedTypeState$.subscribe(type => {
            this.selectedTypeInfo = type;
        });
        this.categoriesState$.subscribe(categories => {
            this.categoriesInfo = categories;
            console.log(this.categoriesInfo);
        });
    }

    public chngeToggle(event): void {
        const eventCategory: string = event.target.previousElementSibling.innerText;
        if (event.detail.checked) {
            this.selectedCategories.push(eventCategory);
        } else {
            this.selectedCategories = this.selectedCategories.filter(itemCategory => itemCategory !== eventCategory);
        }
    }


    InterestsByCategories() {

        switch (this.selectedTypeInfo) {
            case 'News':
                this.selectedCategories.forEach(category => {
                    this.store$.dispatch(new LoadNewsByCategoryAction(category));
                });
                break;

            case 'Events':
                this.selectedCategories.forEach(category => {
                    this.store$.dispatch(new LoadEventsByCategoryAction(category));
                });
                break;

            case 'Meal':
                this.selectedCategories.forEach(category => {
                    this.store$.dispatch(new LoadMealByCategoryAction(category));
                });
                break;

            default:
                break;
        }

        this.store$.dispatch(new AddSelectedCategoriesAction(this.selectedCategories));
        this.navCtrl.navigateForward('/tabs/interests/list');
    }
}
