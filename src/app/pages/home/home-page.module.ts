import { NgModule } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { CommonModule } from '@angular/common';
import { SignOutComponent } from 'src/app/components/sign-out/sign-out.component';

@NgModule({
    imports: [
        HomePageRoutingModule,
        CommonModule
    ],
    exports: [],
    declarations: [
        HomePageComponent,
        SignOutComponent
    ],
    providers: [
        SocialSharing,
    ],
})
export class HomePageModule { }
