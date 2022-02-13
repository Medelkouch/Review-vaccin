import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
/*import {Feedback} from "../../feedback";*/



@Component({
  selector: "app-feedback-vaccinodrom2",
  templateUrl: "./feedback-vaccinodrom2.component.html",
  styleUrls: ["./feedback-vaccinodrom2.component.css"]
})
export class FeedbackVaccinodrom2Component implements OnInit, OnDestroy {

/*  @Input() public feedbacks?: Feedback[];
  @Output() private GetData: EventEmitter<number> = new EventEmitter<
    number
    >();*/


  constructor() { }


  ngOnInit(): void {}

  ngOnDestroy() {
  }

  data: any[] = [];

  GetData(event: any) {
    if (event.target.checked) {
      this.data.push(event.target.defaultValue);
      let d = (<HTMLInputElement>document.getElementById("comment")).value;
      if (d) {
        this.data.push(d)
      }
    }
    else {
      if (this.data.includes(event.target.defaultValue)) {
        this.data = this.data.filter(item => {
          return item !== event.target.defaultValue
        })
      }
    }

    console.log(this.data)
  }
}
