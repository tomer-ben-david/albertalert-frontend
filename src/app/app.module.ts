import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './ngmaterial.module';
import { StoreModule } from '@ngrx/store';

import { alertReducer } from './alert.reducer';
import {AlertEffects} from './alert.effects';

import { AppComponent } from './app.component';

import { StoreDevtoolsModule} from '@ngrx/store-devtools';

import { EffectsModule } from '@ngrx/effects';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireModule} from 'angularfire2';

import { environment } from '../environments/environment';

export const firebaseConfig = environment.firebaseConfig;


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialAppModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,

    StoreModule.forRoot({
      alert: alertReducer }
      ),
    EffectsModule.forRoot(([AlertEffects])),
    StoreDevtoolsModule.instrument({ maxAge: 10 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
