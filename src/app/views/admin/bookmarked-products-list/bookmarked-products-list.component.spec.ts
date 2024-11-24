import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedProductsListComponent } from './bookmarked-products-list.component';
import {AdminService} from "../../../services/admin/admin.service";

describe('BookmarkedProductsListComponent', () => {
  let component: BookmarkedProductsListComponent;
  let fixture: ComponentFixture<BookmarkedProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: AdminService,
          useValue: { bookmarkedProducts: () => ({ subscribe: () => {} }) },
        }
      ],
      imports: [BookmarkedProductsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkedProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
