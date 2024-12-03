import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service';
import { ProductBookmarkQuantity } from '../../../models/admin/product-bookmark-quantity';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';

@Component({
  selector: 'app-most-bookmarked-list',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
  ],
  templateUrl: './most-bookmarked-list.component.html',
  styleUrl: './most-bookmarked-list.component.css',
})
export class MostBookmarkedListComponent implements OnInit {
  topBookmarkedList: ProductBookmarkQuantity[] = [];
  displayedColumns: string[] = ['position', 'meli_id', 'title', 'quantity'];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.topFiveBookmarked().subscribe({
      next: (value) => (this.topBookmarkedList = value),
    });
  }
}
