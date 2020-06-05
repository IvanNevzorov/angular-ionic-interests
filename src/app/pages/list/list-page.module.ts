import { NgModule } from '@angular/core';

import { ListPageComponent } from './list-page.component';
import { ListPageRoutingModule } from './list-page-routing.module';
import { CommonModule } from '@angular/common';
import { SignOutComponent } from 'src/app/components/sign-out/sign-out.component';

@NgModule({
    imports: [
        ListPageRoutingModule,
        CommonModule
    ],
    exports: [],
    declarations: [
        ListPageComponent,
        SignOutComponent
    ],
    providers: [],
})
export class ListPageModule { }
