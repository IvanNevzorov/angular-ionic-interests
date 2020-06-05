import { IonicModule } from '@ionic/angular';
import { InterestsPageRoutingModule } from './interests-page-routing.module';
import { InterestsPageComponent } from 'src/app/pages/interests/interests-page.component';
import { NgModule } from '@angular/core';
import { SignOutComponent } from 'src/app/components/sign-out/sign-out.component';

@NgModule({
    imports: [
        InterestsPageRoutingModule,
        IonicModule
    ],
    declarations: [
        InterestsPageComponent,
        SignOutComponent
    ]
})
export class InterestsPageModule { }
