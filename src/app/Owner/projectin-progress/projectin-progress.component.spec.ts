import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectinProgressComponent } from './projectin-progress.component';

describe('ProjectinProgressComponent', () => {
  let component: ProjectinProgressComponent;
  let fixture: ComponentFixture<ProjectinProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectinProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectinProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
