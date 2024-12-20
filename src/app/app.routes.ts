import { Routes } from '@angular/router';
import { ProductSearchComponent } from './views/search/product-search/product-search.component';
import { BookmarkListComponent } from './views/bookmark/bookmark-list/bookmark-list.component';
import { isLoggedInGuard } from './guards/is-logged-in.guard';
import { PurchaseListComponent } from './views/purchase/purchase-list/purchase-list.component';
import { MostSoldListComponent } from './views/admin/most-sold-list/most-sold-list.component';
import { MostBookmarkedListComponent } from './views/admin/most-bookmarked-list/most-bookmarked-list.component';
import { TopBuyersListComponent } from './views/admin/top-buyers-list/top-buyers-list.component';
import { isAdminGuard } from './guards/is-admin.guard';
import {RegisteredUsersListComponent} from "./views/admin/registered-users-list/registered-users-list.component";
import {
  BookmarkedProductsListComponent
} from "./views/admin/bookmarked-products-list/bookmarked-products-list.component";

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
  {
    path: 'registered-users',
    component: RegisteredUsersListComponent,
    canActivate: [isLoggedInGuard, isAdminGuard],
  },
  {
    path: 'bookmarked-products',
    component: BookmarkedProductsListComponent,
    canActivate: [isLoggedInGuard, isAdminGuard]
  }
];
