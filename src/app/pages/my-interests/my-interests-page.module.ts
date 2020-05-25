import { NgModule } from '@angular/core';
import { MyInterestsPageComponent } from './my-interests-page.component';
import { MyInterestsPageRoutingModule } from './my-interests-page-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        MyInterestsPageRoutingModule,
        CommonModule
    ],
    exports: [],
    declarations: [MyInterestsPageComponent],
    providers: [],
})
export class MyInterestsPageModule { }
