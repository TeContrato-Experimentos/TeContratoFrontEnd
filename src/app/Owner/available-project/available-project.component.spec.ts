import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableProjectComponent } from './available-project.component';

describe('AvailableProjectComponent', () => {
  let component: AvailableProjectComponent;
  let fixture: ComponentFixture<AvailableProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
