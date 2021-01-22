import { TestBed } from '@angular/core/testing';

import { AllUserService } from './all-user.service';

describe('AllUserService', () => {
  let service: AllUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
