import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly authUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  login(credentials: {
    email: string;
    password: string;
  }): Observable<ApiResponse<string>> {
    return this.http
      .post<ApiResponse<string>>(`${this.authUrl}/login`, credentials)
      .pipe(
        tap({
          next: (response) => {
            localStorage.setItem('token', response.payload);
          },
        }),
        catchError(this.handleErrorResponse)
      );
  }

  register(credentials: {
    email: string;
    password: string;
  }): Observable<ApiResponse<string>> {
    return this.http
      .post<ApiResponse<string>>(`${this.authUrl}/register`, credentials)
      .pipe(
        tap({
          next: (response) => {
            localStorage.setItem('token', response.payload);
          },
        }),
        catchError(this.handleErrorResponse)
      );
  }

  private handleErrorResponse(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error occurred';

    // Check if the error response includes a message from your ApiResponse
    if (error.error && error.error.message) {
      errorMessage = error.error.message;
    }

    return throwError(() => new Error(errorMessage));
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logged(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
