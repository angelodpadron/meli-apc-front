import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../models/product/product';
import { SearchService } from '../../services/search/search.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CreateBookmarkDialogComponent } from '../../bookmark/create-bookmark-dialog/create-bookmark-dialog.component';

@Component({
  selector: 'app-product-details-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    CurrencyPipe,
    CommonModule,
  ],
  templateUrl: './product-details-dialog.component.html',
  styleUrl: './product-details-dialog.component.css',
})
export class ProductDetailsDialogComponent {
  meliProductId: string;
  product?: Product;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private searchService: SearchService,
    private dialog: MatDialog  ) {
    this.meliProductId = data.meliProductId;
  }

  ngOnInit() {
    this.searchService.findById(this.meliProductId).subscribe({
      next: (product) => (this.product = product),
    });
  }

  onSave(product: Product) {
    const dialogRef = this.dialog.open(CreateBookmarkDialogComponent, {
      data: { product },
    });

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          console.log('Bookmark created', result);
        }
      },
    });

  }
}
