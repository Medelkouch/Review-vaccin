import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feedback-vaccinodrom',
  templateUrl: './feedback-vaccinodrom.component.html',
  styleUrls: ['./feedback-vaccinodrom.component.css']
})
export class FeedbackVaccinodromComponent implements OnInit, OnDestroy {
  public feedback_form: FormGroup = this.fb.group({
    hostess : '',
    flux: '',
    nurse: ''
  });



  public subscriptions = new Subscription();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.feedback_form.valueChanges.subscribe(services => {
        console.log(services);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
