import { NgModule } from '@angular/core';

import { CategoriesPageComponent } from './categories-page.component';
import { CategoriesPageRoutingModule } from './categories-page-routing.module';

@NgModule({
    imports: [CategoriesPageRoutingModule],
    exports: [],
    declarations: [CategoriesPageComponent],
    providers: [],
})
export class CategoriesPageModule { }
