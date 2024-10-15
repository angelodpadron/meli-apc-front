import { TestBed } from '@angular/core/testing';

import { BookmarkService } from './bookmark.service';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('BookmarkService', () => {
  let service: BookmarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookmarkService,
        provideHttpClient(withInterceptorsFromDi()),
      ],
      imports: []
    });
    service = TestBed.inject(BookmarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
