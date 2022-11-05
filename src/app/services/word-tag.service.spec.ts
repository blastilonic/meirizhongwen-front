import { TestBed } from '@angular/core/testing';

import { WordTagService } from './word-tag.service';

describe('WordTagService', () => {
  let service: WordTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
