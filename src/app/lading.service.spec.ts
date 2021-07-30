import { TestBed } from '@angular/core/testing';

import { LadingService } from './lading.service';

describe('LadingService', () => {
  let service: LadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
