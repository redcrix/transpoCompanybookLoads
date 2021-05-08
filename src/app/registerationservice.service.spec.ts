import { TestBed } from '@angular/core/testing';

import { RegisterationserviceService } from './registerationservice.service';

describe('RegisterationserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterationserviceService = TestBed.get(RegisterationserviceService);
    expect(service).toBeTruthy();
  });
});
