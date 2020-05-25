import { NgModule } from '@angular/core';

import { ListPageComponent } from './list-page.component';
import { ListPageRoutingModule } from './list-page-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        ListPageRoutingModule,
        CommonModule
    ],
    exports: [],
    declarations: [ListPageComponent],
    providers: [],
})
export class ListPageModule { }
