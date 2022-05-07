import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodsContractorComponent } from './payment-methods-contractor.component';

describe('PaymentMethodsContractorComponent', () => {
  let component: PaymentMethodsContractorComponent;
  let fixture: ComponentFixture<PaymentMethodsContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodsContractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodsContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
