import { TestBed } from '@angular/core/testing';

import { ScholarappserviceService } from './scholarappservice.service';

describe('ScholarappserviceService', () => {
  let service: ScholarappserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScholarappserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
