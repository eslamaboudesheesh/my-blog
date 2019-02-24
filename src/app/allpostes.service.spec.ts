import { TestBed } from '@angular/core/testing';

import { AllpostesService } from './allpostes.service';

describe('AllpostesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllpostesService = TestBed.get(AllpostesService);
    expect(service).toBeTruthy();
  });
});
