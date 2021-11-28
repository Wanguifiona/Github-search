import { TestBed } from '@angular/core/testing';

import { GithubService } from './githubsearch.service';

describe('GithubsearchService', () => {
  let service: GithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
