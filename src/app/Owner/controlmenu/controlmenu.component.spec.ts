import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlmenuComponent } from './controlmenu.component';

describe('ControlmenuComponent', () => {
  let component: ControlmenuComponent;
  let fixture: ComponentFixture<ControlmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
