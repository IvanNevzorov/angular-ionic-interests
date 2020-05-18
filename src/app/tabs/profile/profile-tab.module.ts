import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileTabComponent } from './profile-tab.component';

import { ProfileTabRoutingModule } from './profile-tab-routing.module';
import { ProfilePageComponent } from 'src/app/pages/profile/profile-page.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProfileTabRoutingModule,

  ],
  declarations: [ProfileTabComponent, ProfilePageComponent]
})
export class ProfileTabModule { }
