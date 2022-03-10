import { TestBed } from '@angular/core/testing';

import { PersonServices } from './person-services';

describe('PersonServicesService', () => {
  let service: PersonServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
