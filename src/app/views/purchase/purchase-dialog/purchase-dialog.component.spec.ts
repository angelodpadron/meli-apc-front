import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDialogComponent } from './purchase-dialog.component';
import { PurchaseService } from '../../../services/purchase/purchase.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PurchaseDialogComponent', () => {
  let component: PurchaseDialogComponent;
  let fixture: ComponentFixture<PurchaseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseDialogComponent, BrowserAnimationsModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            product: {
              id: 1,
              price: 1,
              stock: 1,
            },
          },
        },
        {
          provide: MatDialogRef,
          useValue: jasmine.createSpyObj('MatDialogRef', ['close']),
        },
        {
          provide: PurchaseService,
          useValue: {
            buyProduct: (_request: any) => {
              return {
                subscribe: () => {},
              };
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
