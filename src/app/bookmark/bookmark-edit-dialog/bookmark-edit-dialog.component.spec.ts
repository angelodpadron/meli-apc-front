import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkEditDialogComponent } from './bookmark-edit-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BookmarkEditDialogComponent', () => {
  let component: BookmarkEditDialogComponent;
  let fixture: ComponentFixture<BookmarkEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarkEditDialogComponent, BrowserAnimationsModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { bookmark: { stars: 0, comment: '' } },
        },
        {
          provide: MatDialogRef,
          useValue: jasmine.createSpyObj('MatDialogRef', ['close']),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BookmarkEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
