import { TestBed } from '@angular/core/testing';

import { FeedbackFormService } from './feedback-form.service';

describe('FeedbackFormServiceService', () => {
  let service: FeedbackFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
