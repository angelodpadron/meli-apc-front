import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ProductBookmarkQuantity } from '../../models/admin/product-bookmark-quantity';
import { ApiResponse } from '../../models/api-response';
import { ProductSaleCount } from '../../models/admin/product-sale-count';
import { UserPurchaseCount } from '../../models/admin/user-purchase-count';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  readonly adminUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  topFiveBookmarked(): Observable<ProductBookmarkQuantity[]> {
    return this.http
      .get<ApiResponse<ProductBookmarkQuantity[]>>(
        `${this.adminUrl}/top-five-bookmarked`
      )
      .pipe(map((response) => response.payload));
  }

  topFiveMostSold(): Observable<ProductSaleCount[]> {
    return this.http
      .get<ApiResponse<ProductSaleCount[]>>(`${this.adminUrl}/top-five-sold`)
      .pipe(map((response) => response.payload));
  }

  topFiveBuyers(): Observable<UserPurchaseCount[]> {
    return this.http
      .get<ApiResponse<UserPurchaseCount[]>>(
        `${this.adminUrl}/top-five-purchasers`
      )
      .pipe(map((response) => response.payload));
  }
}
