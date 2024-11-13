import { TestBed } from '@angular/core/testing';

import { ReportIncomeService } from './report-income.service';

describe('ReportIncomeService', () => {
  let service: ReportIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportIncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
