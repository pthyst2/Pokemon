import { TestBed } from '@angular/core/testing';

import { BeastService } from './beast.service';

describe('BeastService', () => {
  let service: BeastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
