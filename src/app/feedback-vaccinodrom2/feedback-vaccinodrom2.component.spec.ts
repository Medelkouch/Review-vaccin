import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackVaccinodrom2Component } from './feedback-vaccinodrom2.component';

describe('FeedbackVaccinodrom2Component', () => {
  let component: FeedbackVaccinodrom2Component;
  let fixture: ComponentFixture<FeedbackVaccinodrom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackVaccinodrom2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackVaccinodrom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
