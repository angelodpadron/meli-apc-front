import { SearchFilter } from './api-search-filter';
import { Product } from './product';

export interface MeliSearchResponse {
  results: Product[];
  filters: SearchFilter[];
  available_filters: SearchFilter[];
}
