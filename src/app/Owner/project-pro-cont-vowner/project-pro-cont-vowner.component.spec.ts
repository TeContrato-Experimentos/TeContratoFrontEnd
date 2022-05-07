import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProContVOwnerComponent } from './project-pro-cont-vowner.component';

describe('ProjectProContVOwnerComponent', () => {
  let component: ProjectProContVOwnerComponent;
  let fixture: ComponentFixture<ProjectProContVOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectProContVOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProContVOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
