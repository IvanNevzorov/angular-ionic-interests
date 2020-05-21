import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InterestsTabComponent } from './interests-tab.component';
import { InterestsTabRoutingModule } from './interests-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InterestsTabRoutingModule
  ],
  declarations: [
    InterestsTabComponent
  ]
})
export class InterestsTabModule { }
