import { TestBed } from '@angular/core/testing';

import { SearcbySectionService } from './searcby-section.service';

describe('SearcbySectionService', () => {
  let service: SearcbySectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearcbySectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
