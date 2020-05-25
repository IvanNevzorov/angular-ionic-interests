import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './store';
import { InterestsEffecrs } from './store/effects/interests.effects';
import { EffectsModule } from '@ngrx/effects';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { AuthService } from './services/auth.service';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    IonicStorageModule.forRoot(),
    [EffectsModule.forRoot([InterestsEffecrs])]
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    SafariViewController,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
