import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { ControlMessagesComponent } from '../components/control-messages/control-messages.component';
import { SignOutComponent } from '../components/sign-out/sign-out.component';

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
    ControlMessagesComponent
  ]
})
export class TabsPageModule { }
