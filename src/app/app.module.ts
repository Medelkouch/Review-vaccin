import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeedbackVaccinodromComponent } from './feedback-vaccinodrom/feedback-vaccinodrom.component';
import { FeedbackVaccinodrom2Component } from './feedback-vaccinodrom2/feedback-vaccinodrom2.component';
import { FeedbackVaccinodromFinComponent } from './feedback-vaccinodrom-fin/feedback-vaccinodrom-fin.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackVaccinodromComponent,
    FeedbackVaccinodrom2Component,
    FeedbackVaccinodromFinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
