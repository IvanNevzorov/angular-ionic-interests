import { NgModule } from '@angular/core';

import { ListPageComponent } from './list-page.component';
import { ListPageRoutingModule } from './list-page-routing.module';

@NgModule({
    imports: [ListPageRoutingModule],
    exports: [],
    declarations: [ListPageComponent],
    providers: [],
})
export class ListPageModule { }
