import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SearchService } from '../../../services/search/search.service';
import { CurrencyPipe } from '@angular/common';
import { CreateBookmarkDialogComponent } from '../../bookmark/create-bookmark-dialog/create-bookmark-dialog.component';
import { PurchaseDialogComponent } from '../../purchase/purchase-dialog/purchase-dialog.component';
import { ProductDetails } from '../../../models/product/product-details';

@Component({
  selector: 'app-product-details-dialog',
  standalone: true,
  imports: [MatDialogModule, MatCardModule, MatButtonModule, CurrencyPipe],
  templateUrl: './product-details-dialog.component.html',
  styleUrl: './product-details-dialog.component.css',
})
export class ProductDetailsDialogComponent implements OnInit {
  meliProductId: string;
  product?: ProductDetails;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private searchService: SearchService,
    private dialog: MatDialog
  ) {
    this.meliProductId = data.meliProductId;
  }

  ngOnInit() {
    this.searchService.findById(this.meliProductId).subscribe({
      next: (product) => (this.product = product),
    });
  }

  onSave(product: ProductDetails) {
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

  onBuy(product: ProductDetails) {
    this.dialog.open(PurchaseDialogComponent, {
      data: { product },
    });
  }
}
