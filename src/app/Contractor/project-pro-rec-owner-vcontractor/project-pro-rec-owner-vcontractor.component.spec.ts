import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProRecOwnerVContractorComponent } from './project-pro-rec-owner-vcontractor.component';

describe('ProjectProRecOwnerVContractorComponent', () => {
  let component: ProjectProRecOwnerVContractorComponent;
  let fixture: ComponentFixture<ProjectProRecOwnerVContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectProRecOwnerVContractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProRecOwnerVContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
