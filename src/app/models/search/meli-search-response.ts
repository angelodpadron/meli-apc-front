import ProductList from '../product/product-list';
import { SearchFilter } from './search-filter';


export interface MeliSearchResponse {
  results: ProductList[];
  filters: SearchFilter[];
  available_filters: SearchFilter[];
}
