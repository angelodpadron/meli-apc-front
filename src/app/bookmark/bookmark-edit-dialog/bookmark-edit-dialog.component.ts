import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { BookmarkDetails } from '../../models/bookmark/bookmark-details';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-bookmark-edit-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    CommonModule,
  ],
  templateUrl: './bookmark-edit-dialog.component.html',
  styleUrl: './bookmark-edit-dialog.component.css',
})
export class BookmarkEditDialogComponent {
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<BookmarkEditDialogComponent>
  ) {
    this.form = this.formBuilder.group({
      comment: [data.bookmark.comment, [Validators.required]],
      stars: [
        data.bookmark.stars,
        [Validators.required, Validators.min(1), Validators.max(5)],
      ],
    });
  }

  returnEditedBookmark() {
    this.dialogRef.close({
      bookmark: {
        id: this.data.bookmark.id,
        comment: this.form.value.comment,
        stars: this.form.value.stars,
      },
    });
  }
}
