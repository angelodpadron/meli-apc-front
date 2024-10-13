import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { BookmarkService } from '../../services/bookmark/bookmark.service';
import { BookmarkDetails } from '../../models/bookmark/bookmark-details';
import { MatIconModule } from '@angular/material/icon';
import { BookmarkEditDialogComponent } from '../bookmark-edit-dialog/bookmark-edit-dialog.component';

@Component({
  selector: 'app-bookmark-details-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './bookmark-details-dialog.component.html',
  styleUrl: './bookmark-details-dialog.component.css',
})
export class BookmarkDetailsDialogComponent implements OnInit {
  bookmarkId: number;
  bookmarkDetails?: BookmarkDetails;
  bookmarkDetailsDraft?: BookmarkDetails;
  errorString: string;
  editPending: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bookmarkService: BookmarkService,
    private dialogRef: MatDialogRef<BookmarkDetailsDialogComponent>,
    private dialog: MatDialog
  ) {
    this.errorString = '';
    this.bookmarkId = data.bookmarkId;
    this.editPending = false;
  }

  ngOnInit() {
    this.bookmarkService.getBookmarkDetails(this.bookmarkId).subscribe({
      next: (bookmarkDetails) => (this.bookmarkDetails = bookmarkDetails),
    });
  }

  deleteBookmark(bookmark: BookmarkDetails) {
    this.bookmarkService.deleteBookmark(bookmark.id).subscribe({
      next: () => {
        this.dialogRef.close({
          update: true,
        });
      },
      error: (error) => {
        this.errorString = error;
      },
    });
  }

  editBookmark(bookmark: BookmarkDetails) {
    const dialogRef = this.dialog.open(BookmarkEditDialogComponent, {
      width: '600px',
      data: { bookmark },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.bookmark) {
        this.editPending = true;
        this.bookmarkDetailsDraft = result.bookmark;
      }
    });
  }

  saveEdit() {
    if (!this.bookmarkDetailsDraft) {
      return;
    }

    const request = {
      meli_id: this.bookmarkDetails!.post_id,
      comment: this.bookmarkDetailsDraft.comment,
      stars: this.bookmarkDetailsDraft.stars,
    };

    this.bookmarkService.editBookmark(this.bookmarkId, request).subscribe({
      next: () => {
        this.editPending = false;
        this.bookmarkDetails = this.bookmarkDetailsDraft;
      },
      error: (error) => {
        this.errorString = error;
      },
    });
  }
}
