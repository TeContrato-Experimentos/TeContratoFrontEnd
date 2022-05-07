import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetListOwnerComponent } from './budget-list-owner.component';

describe('BudgetListOwnerComponent', () => {
  let component: BudgetListOwnerComponent;
  let fixture: ComponentFixture<BudgetListOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetListOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetListOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
