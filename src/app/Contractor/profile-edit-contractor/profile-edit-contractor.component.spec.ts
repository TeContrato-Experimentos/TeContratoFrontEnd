import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditContractorComponent } from './profile-edit-contractor.component';

describe('ProfileEditContractorComponent', () => {
  let component: ProfileEditContractorComponent;
  let fixture: ComponentFixture<ProfileEditContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEditContractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
