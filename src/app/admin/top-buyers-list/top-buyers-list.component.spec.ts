import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBuyersListComponent } from './top-buyers-list.component';
import { AdminService } from '../../services/admin/admin.service';

describe('TopBuyersListComponent', () => {
  let component: TopBuyersListComponent;
  let fixture: ComponentFixture<TopBuyersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: AdminService,
          useValue: { topFiveBuyers: () => ({ subscribe: () => {} }) },
        },
      ],
      imports: [TopBuyersListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopBuyersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
