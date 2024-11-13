import { TestBed } from '@angular/core/testing';

import { ReportExpenseService } from './report-expense.service';

describe('ReportExpenseService', () => {
  let service: ReportExpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportExpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
