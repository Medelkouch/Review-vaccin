import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackVaccinodromComponent } from './feedback-vaccinodrom.component';

describe('FeedbackVaccinodromComponent', () => {
  let component: FeedbackVaccinodromComponent;
  let fixture: ComponentFixture<FeedbackVaccinodromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackVaccinodromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackVaccinodromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
