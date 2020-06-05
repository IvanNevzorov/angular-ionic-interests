import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { SignInPageComponent } from './sign-in-page.component';
import { SignInPageRoutingModule } from './sign-in-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlMessagesComponent } from 'src/app/components/control-messages/control-messages.component';

@NgModule({
    imports: [
        SignInPageRoutingModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        SignInPageComponent,
        ControlMessagesComponent
    ]
})
export class SignInPageModule { }
