import { NgModule } from '@angular/core';

import { CategoriesPageComponent } from './categories-page.component';
import { CategoriesPageRoutingModule } from './categories-page-routing.module';
import { CommonModule } from '@angular/common';
import { SignOutComponent } from 'src/app/components/sign-out/sign-out.component';

@NgModule({
    imports: [
        CommonModule,
        CategoriesPageRoutingModule
    ],
    exports: [],
    declarations: [
        CategoriesPageComponent,
        SignOutComponent
    ],
    providers: [],
})
export class CategoriesPageModule { }
