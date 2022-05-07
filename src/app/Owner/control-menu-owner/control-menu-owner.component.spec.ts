import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMenuOwnerComponent } from './control-menu-owner.component';

describe('ControlMenuOwnerComponent', () => {
  let component: ControlMenuOwnerComponent;
  let fixture: ComponentFixture<ControlMenuOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlMenuOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlMenuOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
