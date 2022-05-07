import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavContractorComponent } from './main-nav-contractor.component';

describe('MainNavContractorComponent', () => {
  let component: MainNavContractorComponent;
  let fixture: ComponentFixture<MainNavContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavContractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
