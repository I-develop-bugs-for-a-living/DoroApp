import { TestBed } from '@angular/core/testing';

import { WmApiService } from './wm-api.service';

describe('WmApiService', () => {
  let service: WmApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WmApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
