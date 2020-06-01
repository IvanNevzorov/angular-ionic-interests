import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile-page.component';
import { ProfilePageRoutingModule } from './profile-page-routing';
import { CommonModule } from '@angular/common';
import { UserInterestsComponent } from 'src/app/components/user-interests/user-interests.component';
import { UserInfoComponent } from 'src/app/components/user-info/user-info.component';

@NgModule({
    imports: [
        ProfilePageRoutingModule,
        CommonModule
    ],
    exports: [],
    declarations: [
        ProfilePageComponent,
        UserInterestsComponent,
        UserInfoComponent
    ],
    providers: [],
})
export class ProfilePageModule { }
