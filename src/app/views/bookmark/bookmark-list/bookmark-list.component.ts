import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { BookmarkService } from '../../../services/bookmark/bookmark.service';
import { BookmarkSummary } from '../../../models/bookmark/bookmark-summary';
import { MatDialog } from '@angular/material/dialog';
import { BookmarkDetailsDialogComponent } from '../bookmark-details-dialog/bookmark-details-dialog.component';
import {typewriter} from "../../../shared/utils/typewriter";

@Component({
  selector: 'app-bookmark-list',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './bookmark-list.component.html',
  styleUrl: './bookmark-list.component.css',
})
export class BookmarkListComponent implements OnInit {
  bookmarks: BookmarkSummary[] = [];
  noBookmarksMessage: string = "";

  constructor(
    private bookmarkService: BookmarkService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initBookmarks();
  }

  private initBookmarks() {
    this.bookmarkService.getBookmarks().subscribe({
      next: (bookmarks) => {
        this.bookmarks = bookmarks
        if (!bookmarks.length) setTimeout(() => this.initNoBookmarksMessage(), 1000)
      },
    });
  }

  private initNoBookmarksMessage() {
    const setter = (value: string) => this.noBookmarksMessage = value
    typewriter("No hay productos guardados para mostrar en este momento (・_・;)", setter)
  }

  openDetails(bookmarkId: number) {
    const dialogRef = this.dialog.open(BookmarkDetailsDialogComponent, {
      data: { bookmarkId },
    });

    dialogRef.afterClosed().subscribe((output) => {
      if (output && output.updateRequired) {
        this.initBookmarks();
      }
    });
  }
}
