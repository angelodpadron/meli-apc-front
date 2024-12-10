import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MeliSearchResponse } from '../../models/search/meli-search-response';
import { ApiResponse } from '../../models/api-response';
import { ProductDetails } from '../../models/product/product-details';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  private baseUrl = environment.apiBaseUrl + '/api/products';

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

  findById(id: string): Observable<ProductDetails> {
    return this.http
      .get<ApiResponse<ProductDetails>>(`${this.baseUrl}/${id}`)
      .pipe(map((response) => response.payload));
  }
}
