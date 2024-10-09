import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MeliSearchResponse } from '../models/api-search-response';
import { ApiResponse } from '../models/api-response';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080/api/products';

  findByKeyword(
    searchTerm: string,
    filters?: { [key: string]: string }
  ): Observable<MeliSearchResponse> {
    return this.http
      .get<ApiResponse<MeliSearchResponse>>(`${this.baseUrl}/search`, {
        params: { keyword: searchTerm, ...filters },
      })
      .pipe(map((response) => response.payload));
  }

  findById(id: string): Observable<Product> {
    return this.http
      .get<ApiResponse<Product>>(`${this.baseUrl}/${id}`)
      .pipe(map((response) => response.payload));
  }
}
