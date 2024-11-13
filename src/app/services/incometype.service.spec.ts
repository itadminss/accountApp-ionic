import { TestBed } from '@angular/core/testing';

import { IncometypeService } from './incometype.service';

describe('IncometypeService', () => {
  let service: IncometypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncometypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
