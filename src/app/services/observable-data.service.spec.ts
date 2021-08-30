import { TestBed } from '@angular/core/testing';

import { ObservableDataLawsService } from './observable-data.service';

describe('ObservableDataService', () => {
  let service: ObservableDataLawsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservableDataLawsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
