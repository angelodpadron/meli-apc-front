import {ProductSummary} from "./product-summary";

export interface PurchaseResponse {
  id: number;
  product: ProductSummary;
  quantity: number;
  created_at: Date;
  total: number;
}
