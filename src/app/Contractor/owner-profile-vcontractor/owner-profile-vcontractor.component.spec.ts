import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerProfileVContractorComponent } from './owner-profile-vcontractor.component';

describe('OwnerProfileVContractorComponent', () => {
  let component: OwnerProfileVContractorComponent;
  let fixture: ComponentFixture<OwnerProfileVContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerProfileVContractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerProfileVContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
