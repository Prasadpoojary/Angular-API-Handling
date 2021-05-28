import { TestBed } from '@angular/core/testing';

import { HandleAPIService } from './handle-api.service';

describe('HandleAPIService', () => {
  let service: HandleAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
