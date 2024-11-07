import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PurchaseRequest} from "../../models/purchase/purchase-request";
import {map, Observable} from "rxjs";
import {PurchaseResponse} from "../../models/purchase/purchase-response";
import {AuthService} from "../auth/auth.service";
import {ApiResponse} from "../../models/api-response";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  private baseUrl = 'http://localhost:8080/api/purchases';

  buyProduct(purchaseRequest: PurchaseRequest): Observable<PurchaseResponse> {
    if (!this.authService.logged()) {
      return new Observable((observer) => {
        observer.error('Cannot purchase product: user is not logged in');
      });
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`
    })

    return this.http
      .post<ApiResponse<PurchaseResponse>>(`${this.baseUrl}`, purchaseRequest, {headers})
      .pipe(map((response) => response.payload));

  }

  purchases(): Observable<PurchaseResponse[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`
    })

    return this.http
      .get<ApiResponse<PurchaseResponse[]>>(`${this.baseUrl}`, {headers})
      .pipe(map((response) => response.payload));
  }
}