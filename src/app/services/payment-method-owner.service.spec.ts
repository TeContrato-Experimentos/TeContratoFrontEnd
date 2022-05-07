import { TestBed } from '@angular/core/testing';

import { PaymentMethodOwnerService } from './payment-method-owner.service';

describe('PaymentMethodOwnerService', () => {
  let service: PaymentMethodOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentMethodOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
