import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { ModalSingInComponent } from '../components/modal-sign-in/modal-sign-in.component';
import { ModalSignUpComponent } from '../components/modal-sign-up/modal-sign-up.component';
import { StartPageComponent } from '../pages/start/start-page.component';
import { ControlMessagesComponent } from '../components/control-messages/control-messages.component';
import { IonicStorageModule } from '@ionic/storage';
import { AuthService } from '../services/auth/auth.servise';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [
    TabsPage,
    ModalSingInComponent,
    ModalSignUpComponent,
    StartPageComponent,
    ControlMessagesComponent
  ],
  providers: [
    AuthService,
    SafariViewController
  ]
})
export class TabsPageModule { }
