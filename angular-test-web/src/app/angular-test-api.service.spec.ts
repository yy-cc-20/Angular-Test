import { TestBed } from '@angular/core/testing';

import { AngularTestApiService } from './angular-test-api.service';

describe('AngularTestApiService', () => {
  let service: AngularTestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularTestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
