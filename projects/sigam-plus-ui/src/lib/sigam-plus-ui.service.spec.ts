import { TestBed } from '@angular/core/testing';

import { SigamPlusUIService } from './sigam-plus-ui.service';

describe('SigamPlusUIService', () => {
  let service: SigamPlusUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigamPlusUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
