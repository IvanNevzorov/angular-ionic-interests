import { NgModule } from '@angular/core';

import { ProfilePageComponent } from './profile-page.component';
import { ProfilePageRoutingModule } from './profile-page-routing';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        ProfilePageRoutingModule,
        CommonModule
    ],
    exports: [],
    declarations: [ProfilePageComponent],
    providers: [],
})
export class ProfilePageModule { }
