import { NgModule } from '@angular/core';

import { ProfilePageComponent } from './profile-page.component';
import { ProfilePageRoutingModule } from './profile-page-routing';

@NgModule({
    imports: [ProfilePageRoutingModule],
    exports: [],
    declarations: [ProfilePageComponent],
    providers: [],
})
export class ProfilePageModule { }
