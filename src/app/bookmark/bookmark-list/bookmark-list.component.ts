import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { BookmarkService } from '../../services/bookmark/bookmark.service';
import { BookmarkSummary } from '../../models/bookmark/bookmark-summary';
import { MatDialog } from '@angular/material/dialog';
import { BookmarkDetailsDialogComponent } from '../bookmark-details-dialog/bookmark-details-dialog.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-bookmark-list',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './bookmark-list.component.html',
  styleUrl: './bookmark-list.component.css',
})
export class BookmarkListComponent implements OnInit {
  bookmarks: BookmarkSummary[] = [];

  constructor(
    private bookmarkService: BookmarkService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initBookmarks();
  }

  private initBookmarks() {
    this.bookmarkService.getBookmarks().subscribe({
      next: (bookmarks) => (this.bookmarks = bookmarks),
    });
  }

  openDetails(bookmarkId: number) {
    const dialogRef = this.dialog.open(BookmarkDetailsDialogComponent, {
      width: '600px',
      data: { bookmarkId },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.update) {
        this.initBookmarks();
      }
    });
  }
}
