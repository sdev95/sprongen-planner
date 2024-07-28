import { TestBed } from '@angular/core/testing';

import { SprongDatumService } from './sprong-datum.service';

describe('SprongDatumService', () => {
  let service: SprongDatumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprongDatumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
