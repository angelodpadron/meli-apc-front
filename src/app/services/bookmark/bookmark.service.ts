import { Injectable } from '@angular/core';
import { BookmarkRequest } from '../../models/bookmark/bookmark-request';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../models/api-response';
import { AuthService } from '../auth/auth.service';
import { BookmarkSummary } from '../../models/bookmark/bookmark-summary';
import { BookmarkDetails } from '../../models/bookmark/bookmark-details';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  private baseUrl = 'http://localhost:8080/api/bookmarks';

  createBookmark(
    BookmarkRequest: BookmarkRequest
  ): Observable<BookmarkRequest> {
    if (!this.authService.logged()) {
      return new Observable((observer) => {
        observer.error('Cannot create bookmark: user is not logged in');
      });
    }

    return this.http
      .post<ApiResponse<BookmarkRequest>>(this.baseUrl, BookmarkRequest)
      .pipe(map((response) => response.payload));
  }

  getBookmarks(): Observable<BookmarkSummary[]> {
    return this.http
      .get<ApiResponse<BookmarkSummary[]>>(this.baseUrl)
      .pipe(map((response) => response.payload));
  }

  getBookmarkDetails(bookmarkId: number): Observable<BookmarkDetails> {
    return this.http
      .get<ApiResponse<BookmarkDetails>>(`${this.baseUrl}/${bookmarkId}`)
      .pipe(map((response) => response.payload));
  }

  deleteBookmark(bookmarkId: number): Observable<any> {
    return this.http.delete<ApiResponse<any>>(`${this.baseUrl}/${bookmarkId}`);
  }

  editBookmark(
    bookmarkId: number,
    bookmarkRequest: BookmarkRequest
  ): Observable<BookmarkDetails> {
    return this.http
      .put<ApiResponse<BookmarkDetails>>(
        `${this.baseUrl}/${bookmarkId}`,
        bookmarkRequest
      )
      .pipe(map((response) => response.payload));
  }
}
