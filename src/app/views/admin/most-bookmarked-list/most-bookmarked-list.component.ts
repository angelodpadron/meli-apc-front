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

import { typewriter } from "../../../shared/utils/typewriter";
import {PieChartComponent} from "../../../shared/pie-chart/pie-chart.component";

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
    PieChartComponent,
  ],
  templateUrl: './most-bookmarked-list.component.html',
  styleUrl: './most-bookmarked-list.component.css',
})
export class MostBookmarkedListComponent implements OnInit {
  topBookmarkedList: ProductBookmarkQuantity[] = [];
  data: any[] = []
  displayedColumns: string[] = ['position', 'meli_id', 'title', 'quantity'];
  emptyListMessage = ""

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.topFiveBookmarked().subscribe({
      next: (value) => {
        this.topBookmarkedList = value
        this.data = value.map(entry => ({name: entry.title, value: entry.quantity}))
        if (!value.length) setTimeout(() => this.initEmptyListMessage(), 1000)
      },
    });
  }

  private initEmptyListMessage() {
    const setter = (value: string) => this.emptyListMessage = value
    typewriter("No hay datos para mostrar (⊙_⊙;)", setter)
  }
}
