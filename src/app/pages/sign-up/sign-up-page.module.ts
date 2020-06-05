import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { SignUpPageComponent } from './sign-up-page.component';
import { SignUpPageRoutingModule } from './sign-up-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        SignUpPageRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule
    ],
    declarations: [
        SignUpPageComponent
    ]
})
export class SignUpPageModule { }
