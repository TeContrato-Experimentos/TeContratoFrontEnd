import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationContractorComponent } from './configuration-contractor.component';

describe('ConfigurationContractorComponent', () => {
  let component: ConfigurationContractorComponent;
  let fixture: ComponentFixture<ConfigurationContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurationContractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
