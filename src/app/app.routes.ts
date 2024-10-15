import { Routes } from '@angular/router';
import { ProductSearchComponent } from './search/product-search/product-search.component';
import { BookmarkListComponent } from './bookmark/bookmark-list/bookmark-list.component';
import { isLoggedInGuard } from './guards/is-logged-in.guard';

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
];
