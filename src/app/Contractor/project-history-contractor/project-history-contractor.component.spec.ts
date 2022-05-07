import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHistoryContractorComponent } from './project-history-contractor.component';


describe('ProjectHistoryContractorComponent', () => {
  let component: ProjectHistoryContractorComponent;
  let fixture: ComponentFixture<ProjectHistoryContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectHistoryContractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHistoryContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
