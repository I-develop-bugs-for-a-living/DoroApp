import { TestBed } from '@angular/core/testing';

import { MarketApiService } from './market-api.service';

describe('MarketApiService', () => {
  let service: MarketApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
