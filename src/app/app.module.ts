import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ForecastComponent} from './forecast/forecast.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
