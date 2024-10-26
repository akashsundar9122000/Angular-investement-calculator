import { TestBed } from '@angular/core/testing';

import { InvertmentServiceService } from './invertment-service.service';

describe('InvertmentServiceService', () => {
  let service: InvertmentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvertmentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
