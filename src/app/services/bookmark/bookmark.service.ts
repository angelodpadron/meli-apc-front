import { Injectable } from '@angular/core';
import { BookmarkRequest } from '../../models/bookmark/bookmark-request';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from '../../models/api-response';
import { AuthService } from '../auth/auth.service';
import { Bookmark } from '../../models/bookmark/bookmark';

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

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });

    return this.http
      .post<ApiResponse<BookmarkRequest>>(`${this.baseUrl}`, BookmarkRequest, {
        headers,
      })
      .pipe(map((response) => response.payload));
  }

  getBookmarks(): Observable<Bookmark[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });

    return this.http
      .get<ApiResponse<Bookmark[]>>(`${this.baseUrl}`, { headers })
      .pipe(map((response) => response.payload));
  }
}
