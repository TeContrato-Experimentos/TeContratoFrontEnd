import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepRegistrationComponent } from './first-step-registration.component';

describe('FirstStepRegistrationComponent', () => {
  let component: FirstStepRegistrationComponent;
  let fixture: ComponentFixture<FirstStepRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstStepRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStepRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
