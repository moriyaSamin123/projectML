import { TestBed } from '@angular/core/testing';

import { ModelZMANIONLYQAService } from './model-zmanionlyqa.service';

describe('ModelZMANIONLYQAService', () => {
  let service: ModelZMANIONLYQAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelZMANIONLYQAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
