import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseListComponent } from './purchase-list.component';
import { PurchaseService } from '../../../services/purchase/purchase.service';

describe('PurchaseListComponent', () => {
  let component: PurchaseListComponent;
  let fixture: ComponentFixture<PurchaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseListComponent],
      providers: [
        {
          provide: PurchaseService,
          useValue: {
            purchases: () => {
              return {
                subscribe: () => {},
              };
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
