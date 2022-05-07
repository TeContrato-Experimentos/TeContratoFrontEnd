import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditOwnerComponent } from './profile-edit-owner.component';

describe('ProfileEditOwnerComponent', () => {
  let component: ProfileEditOwnerComponent;
  let fixture: ComponentFixture<ProfileEditOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEditOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
