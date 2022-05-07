import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorProfileVOwnerComponent } from './contractor-profile-vowner.component';

describe('ContractorProfileVOwnerComponent', () => {
  let component: ContractorProfileVOwnerComponent;
  let fixture: ComponentFixture<ContractorProfileVOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorProfileVOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorProfileVOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
