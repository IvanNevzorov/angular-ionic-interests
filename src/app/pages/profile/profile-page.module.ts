import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile-page.component';
import { ProfilePageRoutingModule } from './profile-page-routing';
import { CommonModule } from '@angular/common';
import { UserInterestsComponent } from 'src/app/components/user-interests/user-interests.component';
import { UserInfoComponent } from 'src/app/components/user-info/user-info.component';
import { FormsModule } from '@angular/forms';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SignOutComponent } from 'src/app/components/sign-out/sign-out.component';

@NgModule({
    imports: [
        ProfilePageRoutingModule,
        CommonModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        ProfilePageComponent,
        UserInterestsComponent,
        UserInfoComponent,
        SignOutComponent
    ],
    providers: [
        SocialSharing
    ],
})
export class ProfilePageModule { }
