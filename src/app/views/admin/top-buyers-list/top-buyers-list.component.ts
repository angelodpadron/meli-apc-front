import {Component, OnInit} from '@angular/core';
import {UserPurchaseCount} from '../../../models/admin/user-purchase-count';
import {AdminService} from '../../../services/admin/admin.service';
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
import {CurrencyPipe} from '@angular/common';
import {PieChartModule} from "@swimlane/ngx-charts";
import {PieChartComponent} from "../../../shared/pie-chart/pie-chart.component";
import {typewriter} from "../../../shared/utils/typewriter";

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
    PieChartModule,
    PieChartComponent,
  ],
  templateUrl: './top-buyers-list.component.html',
  styleUrl: './top-buyers-list.component.css',
})
export class TopBuyersListComponent implements OnInit {
  topBuyers: UserPurchaseCount[] = [];
  data: any[] = [];
  displayedColumns: string[] = [
    'position',
    'email',
    'total_spend',
    'total_items',
  ];
  emptyListMessage: string = ""

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.adminService.topFiveBuyers().subscribe({
      next: (value) => {
        this.topBuyers = value
        this.data = value.map((entry) => ({name: entry.email, value: entry.total_items}))
        if (!value.length) setTimeout(() => this.initEmptyListMessage(), 1000)
      },
    });
  }

  private initEmptyListMessage() {
    const setter = (value: string) => this.emptyListMessage = value
    typewriter("Aparentemente, nadie guardo un producto (¬_¬)", setter)
  }


}
