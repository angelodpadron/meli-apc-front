import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ProductBookmarkQuantity } from '../../models/admin/product-bookmark-quantity';
import { ApiResponse } from '../../models/api-response';
import { ProductSaleCount } from '../../models/admin/product-sale-count';
import { UserPurchaseCount } from '../../models/admin/user-purchase-count';
import {UserBasicResume} from "../../models/admin/user-basic-resume";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  readonly adminUrl = environment.apiBaseUrl + '/api/admin';

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

  registeredUsers(): Observable<UserBasicResume[]> {
    return this.http
      .get<ApiResponse<UserBasicResume[]>>(
        `${this.adminUrl}/registered-users`
      )
      .pipe(map((response) => response.payload));
  }

  bookmarkedProducts(): Observable<ProductBookmarkQuantity[]> {
    return this.http
      .get<ApiResponse<ProductBookmarkQuantity[]>>(
        `${this.adminUrl}/bookmarked-products`
      )
      .pipe(map((response) => response.payload))
  }
}
