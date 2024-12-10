import { Component, OnInit } from '@angular/core';
import { ProductSaleCount } from '../../../models/admin/product-sale-count';
import { AdminService } from '../../../services/admin/admin.service';
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
import {PieChartComponent} from "../../../shared/pie-chart/pie-chart.component";
import {typewriter} from "../../../shared/utils/typewriter";

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
    PieChartComponent,
  ],
  templateUrl: './most-sold-list.component.html',
  styleUrl: './most-sold-list.component.css',
})
export class MostSoldListComponent implements OnInit {
  mostSold: ProductSaleCount[] = [];
  data: any[] = []
  displayedColumns: string[] = ['position', 'meli_id', 'title', 'sales'];
  emptyListMessage: string = "";

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.topFiveMostSold().subscribe({
      next: (value) => {
        this.mostSold = value
        this.data = value.map(entry => ({name: entry.title, value: entry.sales}))
        if (!value.length) setTimeout(() => this.initEmptyListMessage(), 1000)
      },
    });
  }

  private initEmptyListMessage() {
    const setter = (value: string) => this.emptyListMessage = value
    typewriter("No hay datos para mostrar (⊙_⊙;)", setter)
  }
}
