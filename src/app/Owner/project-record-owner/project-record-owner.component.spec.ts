import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRecordOwnerComponent } from './project-record-owner.component';

describe('ProjectRecordOwnerComponent', () => {
  let component: ProjectRecordOwnerComponent;
  let fixture: ComponentFixture<ProjectRecordOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectRecordOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRecordOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
