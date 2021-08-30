import { TestBed } from '@angular/core/testing';

import { ZMANIMODELONLYQAService } from './zmanimodelonlyqa.service';

describe('ZMANIMODELONLYQAService', () => {
  let service: ZMANIMODELONLYQAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZMANIMODELONLYQAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
