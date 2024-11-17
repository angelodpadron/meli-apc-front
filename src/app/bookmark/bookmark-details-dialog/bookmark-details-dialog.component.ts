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
  styleUrls: ['./bookmark-details-dialog.component.css'],
})
export class BookmarkDetailsDialogComponent implements OnInit {
  // Bookmark state
  bookmarkId: number;
  bookmarkDetails?: BookmarkDetails;
  initialBookmarkDetails?: BookmarkDetails;
  
  // Edit state
  editPending: boolean;
  hasBeenEdited: boolean;
  modifiedProperties?: { comment: boolean; stars: boolean };
  
  errorString?: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bookmarkService: BookmarkService,
    private dialogRef: MatDialogRef<BookmarkDetailsDialogComponent>,
    private dialog: MatDialog
  ) {
    this.bookmarkId = data.bookmarkId;
    this.editPending = false;
    this.hasBeenEdited = false;
  }

  ngOnInit() {
    this.loadBookmarkDetails();
  }

  loadBookmarkDetails() {
    this.bookmarkService.getBookmarkDetails(this.bookmarkId).subscribe({
      next: (bookmarkDetails) => {
        this.bookmarkDetails = bookmarkDetails;
        this.initialBookmarkDetails = { ...bookmarkDetails };
      },
      error: this.handleError,
    });
  }

  deleteBookmark(bookmark: BookmarkDetails) {
    this.bookmarkService.deleteBookmark(bookmark.id).subscribe({
      next: () => {
        this.dialogRef.close({ updateRequired: true });
      },
      error: (error) => this.handleError(error),
    });
  }

  closeDialog() {
    this.dialogRef.close({ updateRequired: this.hasBeenEdited });
  }

  // Open edit modal and track changes
  editBookmark(bookmark: BookmarkDetails) {
    const dialogRef = this.dialog.open(BookmarkEditDialogComponent, {
      data: { bookmark },
    });

    dialogRef.afterClosed().subscribe((output) => {
      if (output && output.updatedBookmark) {
        this.bookmarkDetails = output.updatedBookmark;
        this.modifiedProperties = this.getModifiedProperties(output.updatedBookmark);
        this.editPending = Object.values(this.modifiedProperties).some((prop) => prop);
      }
    });
  }

  // Utility method to compare and detect changes in the bookmark
  getModifiedProperties(updatedBookmark: BookmarkDetails) {
    return {
      comment: this.initialBookmarkDetails!.comment !== updatedBookmark.comment,
      stars: this.initialBookmarkDetails!.stars !== updatedBookmark.stars,
    };
  }

  // Save edits to the backend and reset state after success
  saveEdit() {
    if (!this.editPending || !this.bookmarkDetails) return;

    const request = this.buildSaveRequest();

    this.bookmarkService.editBookmark(this.bookmarkId, request).subscribe({
      next: (bookmarkDetails) => {
        this.bookmarkDetails = bookmarkDetails;
        this.resetEditState();
        this.hasBeenEdited = true;
      },
      error: this.handleError,
    });
  }

  // Build request payload
  // TODO: change meli_id to post_id
  buildSaveRequest() {
    return {
      meli_id: this.bookmarkDetails!.post_id,
      comment: this.bookmarkDetails!.comment,
      stars: this.bookmarkDetails!.stars,
    };
  }

  // Reset the edit state after a successful save
  resetEditState() {
    this.initialBookmarkDetails = { ...this.bookmarkDetails! };
    this.modifiedProperties = { comment: false, stars: false };
    this.editPending = false;
  }

  handleError(error: any) {
    this.errorString = error;
    console.error('Error occurred:', error);
  }
}
