import { NgModule } from '@angular/core';

import { CategoriesPageComponent } from './categories-page.component';
import { CategoriesPageRoutingModule } from './categories-page-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        CategoriesPageRoutingModule
    ],
    exports: [],
    declarations: [CategoriesPageComponent],
    providers: [],
})
export class CategoriesPageModule { }
