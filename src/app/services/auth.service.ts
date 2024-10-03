import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
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
        })
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
        })
      );
  }

  logged(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
