import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BookmarkService } from '../../../services/bookmark/bookmark.service';

@Component({
  selector: 'app-create-bookmark-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
  ],
  templateUrl: './create-bookmark-dialog.component.html',
  styleUrl: './create-bookmark-dialog.component.css',
})
export class CreateBookmarkDialogComponent {
  form: FormGroup;
  errorMessage: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private bookmarkService: BookmarkService,
    private dialogRef: MatDialogRef<CreateBookmarkDialogComponent>
  ) {
    this.form = this.formBuilder.group({
      comment: ['', [Validators.required]],
      stars: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
    });

    this.errorMessage = '';
  }

  onSave() {
    if (this.form.invalid) {
      return;
    }

    const { comment, stars } = this.form.value;

    this.bookmarkService
      .createBookmark({
        comment,
        stars,
        meli_id: this.data.product.id,
      })
      .subscribe({
        next: () => {
          this.form.reset();
          this.dialogRef.close(true);
        },
        error: (error) => {
          this.errorMessage = error;
        },
      });
  }
}
