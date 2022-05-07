import { TestBed } from '@angular/core/testing';

import { ProjectControlService } from './project-control.service';

describe('ProjectControlService', () => {
  let service: ProjectControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
