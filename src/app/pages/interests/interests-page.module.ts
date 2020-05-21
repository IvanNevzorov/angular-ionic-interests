import { IonicModule } from '@ionic/angular';
import { InterestsPageRoutingModule } from './interests-page-routing.module';
import { InterestsPageComponent } from 'src/app/pages/interests/interests-page.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        InterestsPageRoutingModule,
        IonicModule
    ],
    declarations: [
        InterestsPageComponent
    ]
})
export class InterestsPageModule { }
