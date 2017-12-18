import { TestBed, inject } from '@angular/core/testing';

import { CustomersListService } from './customers-list.service';

describe('CustomersListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomersListService]
    });
  });

  it('should be created', inject([CustomersListService], (service: CustomersListService) => {
    expect(service).toBeTruthy();
  }));
});
