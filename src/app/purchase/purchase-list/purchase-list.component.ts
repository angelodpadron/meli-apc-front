import {Component, OnInit} from '@angular/core';
import {
  MatActionList,
  MatListItem,
  MatListItemAvatar,
  MatListItemLine,
  MatListItemMeta,
  MatListItemTitle
} from "@angular/material/list";
import {PurchaseResponse} from "../../models/purchase/purchase-response";
import {PurchaseService} from "../../services/purchase/purchase.service";
import {CurrencyPipe, DatePipe} from "@angular/common";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-purchase-list',
  standalone: true,
  imports: [
    MatActionList,
    MatListItem,
    MatListItemTitle,
    MatListItemLine,
    MatListItemMeta,
    DatePipe,
    CurrencyPipe,
    MatDivider,
    MatListItemAvatar
  ],
  templateUrl: './purchase-list.component.html',
  styleUrl: './purchase-list.component.css'
})
export class PurchaseListComponent implements OnInit {
  purchases: PurchaseResponse[] = []

  constructor(private purchaseService: PurchaseService) {
  }

  ngOnInit(): void {
    this.purchaseService
      .purchases()
      .subscribe({
        next: (purchases) => (this.purchases = purchases),
        error: (err) => console.error(err)
      })
  }



}
