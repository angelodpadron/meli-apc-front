import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/core";
import {PurchaseService} from "../../services/purchase/purchase.service";
import {PurchaseRequest} from "../../models/purchase/purchase-request";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-purchase-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatOption,
    MatError,
    MatSelect,
  ],
  templateUrl: './purchase-dialog.component.html',
  styleUrl: './purchase-dialog.component.css'
})
export class PurchaseDialogComponent {
  meliId: string;
  stock: number;
  form: FormGroup;
  errorMessage?: string

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private purchaseService: PurchaseService,
    private dialogRef: MatDialogRef<PurchaseDialogComponent>
  ) {
    this.meliId = data['meliId'];
    this.stock = data['stock'];
    this.form = this.formBuilder.group({
      quantity: [1, [Validators.required, Validators.min(1), Validators.max(this.stock)]],
    })
  }

  onBuy() {
    if (this.form.invalid) return;

    const purchaseRequest: PurchaseRequest = {
      meli_id: this.meliId,
      quantity: this.form.value['quantity'],
    }

    this.purchaseService
      .buyProduct(purchaseRequest)
      .subscribe({
        next: (result) => {
          console.log(result);
          this.form.reset();
          this.dialogRef.close(true)
        },
        error: (error) => {
          this.errorMessage = error;
        }
      })

  }

  range(n: number, m: number): number[] {
    const res = []
    for (let i = n; i < m; i++) {
      res.push(i)
    }

    return res;
  }

}
