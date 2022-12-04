import { TestBed } from '@angular/core/testing';

import { ShowSectionNameService } from './show-section-name.service';

describe('ShowSectionNameService', () => {
  let service: ShowSectionNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowSectionNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
