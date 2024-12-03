import {Component, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {ProductBookmarkQuantity} from "../../../models/admin/product-bookmark-quantity";
import {AdminService} from "../../../services/admin/admin.service";

@Component({
  selector: 'app-bookmarked-products-list',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef
  ],
  templateUrl: './bookmarked-products-list.component.html',
  styleUrl: './bookmarked-products-list.component.css'
})
export class BookmarkedProductsListComponent implements OnInit{
  bookmarkedProducts: ProductBookmarkQuantity[] = [];
  displayedColumns: string[] = ['meli_id', 'title', 'quantity'];

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.adminService.bookmarkedProducts().subscribe({
      next: (value) => this.bookmarkedProducts = value
    })
  }

}
