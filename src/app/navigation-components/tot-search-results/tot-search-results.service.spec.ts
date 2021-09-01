import { TestBed } from '@angular/core/testing';

import { TotSearchResultsService } from './tot-search-results.service';

describe('TesteService', () => {
  let service: TotSearchResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotSearchResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
