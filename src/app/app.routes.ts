import {Routes} from "@angular/router";
import {FeedbackVaccinodromComponent} from "./feedback-vaccinodrom/feedback-vaccinodrom.component";
import {FeedbackVaccinodrom2Component} from "./feedback-vaccinodrom/feedback-vaccinodrom2/feedback-vaccinodrom2.component";

export const APP_ROUTES: Routes = [
  { path:"", redirectTo:"feedbackVaccinodrom", pathMatch: "full" },
  { path: "feedbackVaccinodrom", component: FeedbackVaccinodromComponent },
  { path: "feedbackVaccinodrom2", component: FeedbackVaccinodrom2Component }
];
