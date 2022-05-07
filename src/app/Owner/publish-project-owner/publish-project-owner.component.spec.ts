import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishProjectOwnerComponent } from './publish-project-owner.component';

describe('PublishProjectOwnerComponent', () => {
  let component: PublishProjectOwnerComponent;
  let fixture: ComponentFixture<PublishProjectOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishProjectOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishProjectOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
