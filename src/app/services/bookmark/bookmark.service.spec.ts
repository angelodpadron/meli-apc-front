import { TestBed } from '@angular/core/testing';

import { BookmarkService } from './bookmark.service';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

describe('BookmarkService', () => {
  let service: BookmarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookmarkService,
        provideHttpClient(withInterceptorsFromDi()),
        {
          provide: AuthService,
          useValue: { logged: () => ({ subscribe: () => {} }) },
        },
      ],
      imports: [],
    });
    service = TestBed.inject(BookmarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
