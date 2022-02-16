import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {finalize, Subscription} from "rxjs";
import {FeedbackValueMap} from "../core/data/map";
import {SharedDataService} from "../core/services/shared-data.service";
import {FeedbackFormService} from "../core/services/feedback-form.service";
import {Router} from "@angular/router";
import {Feedback} from "../core/models/feedback";



@Component({
  selector: "app-feedback-vaccinodrom2",
  templateUrl: "./feedback-vaccinodrom2.component.html",
  styleUrls: ["./feedback-vaccinodrom2.component.css"]
})
export class FeedbackVaccinodrom2Component implements OnInit, OnDestroy {
  feedback2_form: FormGroup = this.fb.group({
    checkOthers : false,
    checkDirecteur1 : false,
    checkDirecteur2 : false,
    checkDirecteur4 : false,
    checkDirecteur5 : false,
    checkDirecteur6 : false,
    checkDirecteur7 : false,
    checkDirecteur8 : false,
    checkDirecteur9 : false,
    checkDirecteur10 : ''
  });


  directeurCheckList : any[] = [];
  filteredDirecteurCheckList: string[] = [];
  services: any;

  constructor(
    private fb : FormBuilder,
    private sharedService: SharedDataService,
    private feedbackService: FeedbackFormService,
    private router: Router
  ) { }

  public subscriptions = new Subscription();


  ngOnInit(): void {
    this.subscriptions.add(
      this.feedback2_form.valueChanges.subscribe( formValue => {
        this.getFormValues(formValue);
      })
    );
    this.sharedService.currentMessage.subscribe(
      res => this.services = res
    );

  }


  private getFormValues(formValue: any) {
    const controls: { text: string, value: string} [] = Object.keys(formValue).map(key => {
      return {text: key, value: key}
    });


    controls.forEach(control => {
      const controlValue: string = FeedbackValueMap.get(control.text)!;
      if (formValue[control.text]) {
        this.directeurCheckList.push(controlValue)
      }
    });
    let d = this.feedback2_form.get('checkDirecteur10')!.value;
    if (d) {
      this.directeurCheckList.push(d);
    }
    this.filteredDirecteurCheckList = this.directeurCheckList.filter(item => item !== '');
  }



  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  submit() {

    let feedback: Feedback = {
      services: this.services,
      data: this.filteredDirecteurCheckList
    }
    console.log(feedback)

    this.feedbackService.Feedback(feedback).pipe(
      finalize(() => {
        console.log("Finalize from feedback submit");
      })
    ).subscribe(res => {
      console.log(res)
      this.router.navigate(['/feedbackVaccinodromFin'])
    })
  }
}
