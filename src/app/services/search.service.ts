import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MeliSearchResponse } from '../models/api-search-response';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  private searchUrl = 'http://localhost:8080/api/products/search';

  findByKeyword(searchTerm: string): Observable<MeliSearchResponse> {
    return this.http
      .get<ApiResponse<MeliSearchResponse>>(this.searchUrl, {
        params: { keyword: searchTerm },
      })
      .pipe(map((response) => response.payload));
  }
}
