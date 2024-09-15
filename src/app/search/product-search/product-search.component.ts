import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CurrencyPipe } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { SearchFilter } from '../../models/api-search-filter';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [CurrencyPipe, MatTableModule, MatProgressBarModule, MatListModule],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css',
})
export class ProductSearchComponent {
  searchTerm: string = '';
  products: Product[] = [];
  availableFilters: SearchFilter[] = [];

  loaded = false;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['keyword'];
      if (this.searchTerm) {
        this.loaded = false;
        this.search();
      }
    });
  }

  private search() {
    this.searchService.findByKeyword(this.searchTerm).subscribe({
      next: (response) => {
        this.products = response.results;
        this.availableFilters = response.available_filters;
        this.loaded = true;
      },
      error: (error) => console.error(error),
    });
  }
}
