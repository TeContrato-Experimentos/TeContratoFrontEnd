import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProfilRecordOwnerComponent } from './project-profil-record-owner.component';

describe('ProjectProfilRecordOwnerComponent', () => {
  let component: ProjectProfilRecordOwnerComponent;
  let fixture: ComponentFixture<ProjectProfilRecordOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectProfilRecordOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProfilRecordOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
