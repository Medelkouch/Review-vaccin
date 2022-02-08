import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackVaccinodromFinComponent } from './feedback-vaccinodrom-fin.component';

describe('FeedbackVaccinodromFinComponent', () => {
  let component: FeedbackVaccinodromFinComponent;
  let fixture: ComponentFixture<FeedbackVaccinodromFinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackVaccinodromFinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackVaccinodromFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
