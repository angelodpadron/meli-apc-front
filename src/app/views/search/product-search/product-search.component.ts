import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../../services/search/search.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {CurrencyPipe} from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {SearchFilter} from '../../../models/search/search-filter';
import {FilterValue} from '../../../models/search/filter-value';
import {MatDialog} from '@angular/material/dialog';
import {ProductDetailsDialogComponent} from '../../product/product-details-dialog/product-details-dialog.component';
import ProductList from '../../../models/product/product-list';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [CurrencyPipe, MatTableModule, MatProgressBarModule, MatListModule],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css',
})
export class ProductSearchComponent implements OnInit{

  searchTerm: string = '';
  filterParams: { [key: string]: string } = {};
  products: ProductList[] = [];
  filters: SearchFilter[] = [];
  availableFilters: SearchFilter[] = [];

  loaded = false;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['keyword'];
      this.filterParams = params;
      this.loaded = false;
      this.search();
    });
  }

  private search() {
    this.searchService
      .findByKeyword(this.searchTerm, this.filterParams)
      .subscribe({
        next: (response) => {
          this.products = response.results;
          this.filters = response.filters;
          this.availableFilters = response.available_filters;
          this.loaded = true;
        },
        error: console.error,
      });
  }

  toggleFilter(filterId: string, value: FilterValue) {
    // create a query object with the current filters
    const query: { [key: string]: string } = this.filters.reduce<{
      [key: string]: string;
    }>((acc, filter) => {
      acc[filter.id] = filter.values.map((value) => value.id).join(',');
      return acc;
    }, {});

    // check if query has an entry for the filterId, if so, remove it, otherwise add it
    if (query[filterId]) {
      delete query[filterId];
    } else {
      query[filterId] = value.id;
    }

    // finally replace the current query params with the new ones, triggering a new search
    this.router.navigate([], {
      queryParams: {
        keyword: this.searchTerm,
        ...query,
      },
      queryParamsHandling: 'replace',
    });
  }

  openProduct(meliProductId: string) {
    this.dialog.open(ProductDetailsDialogComponent, {
      data: { meliProductId },
    });
  }
}
