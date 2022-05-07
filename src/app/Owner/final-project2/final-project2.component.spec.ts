import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalProject2Component } from './final-project2.component';

describe('FinalProject2Component', () => {
  let component: FinalProject2Component;
  let fixture: ComponentFixture<FinalProject2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalProject2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalProject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
