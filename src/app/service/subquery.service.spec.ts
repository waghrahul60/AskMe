import { TestBed } from '@angular/core/testing';

import { SubqueryService } from './subquery.service';

describe('SubqueryService', () => {
  let service: SubqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
