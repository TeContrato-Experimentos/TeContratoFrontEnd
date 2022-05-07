import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHistOwnVContractorComponent } from './project-hist-own-vcontractor.component';

describe('ProjectHistOwnVContractorComponent', () => {
  let component: ProjectHistOwnVContractorComponent;
  let fixture: ComponentFixture<ProjectHistOwnVContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectHistOwnVContractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHistOwnVContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
