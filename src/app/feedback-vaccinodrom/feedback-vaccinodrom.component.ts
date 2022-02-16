import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {SharedDataService} from "../core/services/shared-data.service";

@Component({
  selector: 'app-feedback-vaccinodrom',
  templateUrl: './feedback-vaccinodrom.component.html',
  styleUrls: ['./feedback-vaccinodrom.component.css']
})
export class FeedbackVaccinodromComponent implements OnInit, OnDestroy {

  feedback_form: FormGroup = this.fb.group({
      hostess: 0,
      flux: 0,
      nurse: 0
  });


  public subscriptions = new Subscription();

  constructor(private fb: FormBuilder, private sharedService: SharedDataService) {}

  services: any = {
    hostess: 0,
    flux: 0,
    nurse: 0
  };

  ngOnInit(): void {
    this.subscriptions.add(
      this.feedback_form.valueChanges.subscribe(services => {
        for (const [key, value] of Object.entries(services)) {
          if (typeof value === "string") {
            this.services[key] = parseInt(value)
          }
        }
        /*console.log(this.services)*/
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  SendData() {
    this.sharedService.changeMessage(this.services)
  }
}
