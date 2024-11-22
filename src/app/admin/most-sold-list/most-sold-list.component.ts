import { Component, OnInit } from '@angular/core';
import { ProductSaleCount } from '../../models/admin/product-sale-count';
import { AdminService } from '../../services/admin/admin.service';
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
  selector: 'app-most-sold-list',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
  ],
  templateUrl: './most-sold-list.component.html',
  styleUrl: './most-sold-list.component.css',
})
export class MostSoldListComponent implements OnInit {
  mostSold: ProductSaleCount[] = [];
  displayedColumns: string[] = ['position', 'meli_id', 'title', 'sales'];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.topFiveMostSold().subscribe({
      next: (value) => (this.mostSold = value),
    });
  }
}
