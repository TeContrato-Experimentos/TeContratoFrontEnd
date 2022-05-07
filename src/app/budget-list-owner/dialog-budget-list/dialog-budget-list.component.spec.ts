import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBudgetListComponent } from './dialog-budget-list.component';

describe('DialogBudgetListComponent', () => {
  let component: DialogBudgetListComponent;
  let fixture: ComponentFixture<DialogBudgetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBudgetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBudgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
