import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProfileVContractorComponent } from './project-profile-vcontractor.component';

describe('ProjectProfileVContractorComponent', () => {
  let component: ProjectProfileVContractorComponent;
  let fixture: ComponentFixture<ProjectProfileVContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectProfileVContractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProfileVContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
