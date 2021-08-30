import { TestBed } from '@angular/core/testing';

import { ZMANIOBJECTONLYQAService } from './zmaniobjectonlyqa.service';

describe('ZMANIOBJECTONLYQAService', () => {
  let service: ZMANIOBJECTONLYQAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZMANIOBJECTONLYQAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
