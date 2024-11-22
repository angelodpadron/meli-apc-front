import { Routes } from '@angular/router';
import { ProductSearchComponent } from './search/product-search/product-search.component';
import { BookmarkListComponent } from './bookmark/bookmark-list/bookmark-list.component';
import { isLoggedInGuard } from './guards/is-logged-in.guard';
import { PurchaseListComponent } from './purchase/purchase-list/purchase-list.component';
import { MostSoldListComponent } from './admin/most-sold-list/most-sold-list.component';
import { MostBookmarkedListComponent } from './admin/most-bookmarked-list/most-bookmarked-list.component';
import { TopBuyersListComponent } from './admin/top-buyers-list/top-buyers-list.component';
import { isAdminGuard } from './guards/is-admin.guard';

export const routes: Routes = [
  {
    path: 'search',
    component: ProductSearchComponent,
  },
  {
    path: 'bookmarks',
    component: BookmarkListComponent,
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'purchases',
    component: PurchaseListComponent,
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'most-sold',
    component: MostSoldListComponent,
    canActivate: [isLoggedInGuard, isAdminGuard],
  },
  {
    path: 'most-bookmarked',
    component: MostBookmarkedListComponent,
    canActivate: [isLoggedInGuard, isAdminGuard],
  },
  {
    path: 'top-buyers',
    component: TopBuyersListComponent,
    canActivate: [isLoggedInGuard, isAdminGuard],
  },
];
