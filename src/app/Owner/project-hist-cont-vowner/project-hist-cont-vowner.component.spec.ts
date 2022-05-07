import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHistContVOwnerComponent } from './project-hist-cont-vowner.component';

describe('ProjectHistContVOwnerComponent', () => {
  let component: ProjectHistContVOwnerComponent;
  let fixture: ComponentFixture<ProjectHistContVOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectHistContVOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHistContVOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
