import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeedbackVaccinodromComponent } from './feedback-vaccinodrom/feedback-vaccinodrom.component';
import { FeedbackVaccinodrom2Component } from './feedback-vaccinodrom/feedback-vaccinodrom2/feedback-vaccinodrom2.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {FeedbackVaccinodromFinComponent} from "./feedback-vaccinodrom-fin/feedback-vaccinodrom-fin.component";
import {APP_ROUTES} from "./app.routes";



@NgModule({
  declarations: [
    AppComponent,
    FeedbackVaccinodromComponent,
    FeedbackVaccinodrom2Component,
    FeedbackVaccinodromFinComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
