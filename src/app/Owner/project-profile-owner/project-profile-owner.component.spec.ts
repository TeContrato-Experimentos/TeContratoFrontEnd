import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProfileOwnerComponent } from './project-profile-owner.component';

describe('ProjectProfileOwnerComponent', () => {
  let component: ProjectProfileOwnerComponent;
  let fixture: ComponentFixture<ProjectProfileOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectProfileOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProfileOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
