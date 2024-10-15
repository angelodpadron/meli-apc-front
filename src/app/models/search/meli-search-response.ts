import { Product } from '../product/product';
import { SearchFilter } from './search-filter';


export interface MeliSearchResponse {
  results: Product[];
  filters: SearchFilter[];
  available_filters: SearchFilter[];
}
