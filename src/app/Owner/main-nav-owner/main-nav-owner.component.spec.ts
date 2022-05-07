import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavOwnerComponent } from './main-nav-owner.component';

describe('MainNavOwnerComponent', () => {
  let component: MainNavOwnerComponent;
  let fixture: ComponentFixture<MainNavOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
