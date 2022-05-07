import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPaymentContractorComponent } from './dialog-payment-contractor.component';

describe('DialogPaymentContractorComponent', () => {
  let component: DialogPaymentContractorComponent;
  let fixture: ComponentFixture<DialogPaymentContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPaymentContractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPaymentContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
