import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { ModalAuthorizationComponent } from '../components/modal-authorization/modal-authorization.component';
import { ModalRegistrationComponent } from '../components/modal-registration/modal-registration.component';
import { StartPageComponent } from '../pages/start/start-page.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
    ModalAuthorizationComponent,
    ModalRegistrationComponent,
    StartPageComponent
  ]
})
export class TabsPageModule { }
