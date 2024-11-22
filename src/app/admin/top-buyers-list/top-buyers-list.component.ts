import { Component, OnInit } from '@angular/core';
import { UserPurchaseCount } from '../../models/admin/user-purchase-count';
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
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-top-buyers-list',
  standalone: true,
  imports: [
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatTable,
    MatHeaderCellDef,
    CurrencyPipe,
  ],
  templateUrl: './top-buyers-list.component.html',
  styleUrl: './top-buyers-list.component.css',
})
export class TopBuyersListComponent implements OnInit {
  topBuyers: UserPurchaseCount[] = [];
  displayedColumns: string[] = [
    'position',
    'email',
    'total_spend',
    'total_items',
  ];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.topFiveBuyers().subscribe({
      next: (value) => (this.topBuyers = value),
    });
  }
}
