import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Feedback} from "../models/feedback";
import {environment} from "../../../environments/environment";

const url = environment.API;

@Injectable({
  providedIn: 'root'
})
export class FeedbackFormService {

  constructor(private httpClient: HttpClient) { }

  public Feedback(data: Feedback): Observable<Feedback> {
    return this.httpClient.post<Feedback>(url, data)
  }
}
