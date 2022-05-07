import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingProjectsOwnerComponent } from './ongoing-projects-owner.component';

describe('OngoingProjectsOwnerComponent', () => {
  let component: OngoingProjectsOwnerComponent;
  let fixture: ComponentFixture<OngoingProjectsOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngoingProjectsOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingProjectsOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
