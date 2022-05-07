import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContractorComponent } from './home-contractor.component';

describe('HomeContractorComponent', () => {
  let component: HomeContractorComponent;
  let fixture: ComponentFixture<HomeContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeContractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
