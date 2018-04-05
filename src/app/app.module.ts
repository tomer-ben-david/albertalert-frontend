import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './ngmaterial.module';
import { StoreModule } from '@ngrx/store';

import { alertReducer } from './alert.reducer';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialAppModule,
    StoreModule.forRoot({
      alert: alertReducer }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
