import { TestBed } from '@angular/core/testing';

import { ParaulaService } from './paraula.service';

describe('ParaulaService', () => {
  let service: ParaulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParaulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
