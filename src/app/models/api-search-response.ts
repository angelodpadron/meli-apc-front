import { SearchFilter } from './api-search-filter';
import { Product } from './product';

export interface MeliSearchResponse {
  results: Product[];
  available_filters: SearchFilter[];
}
