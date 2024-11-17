import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkDetailsDialogComponent } from './bookmark-details-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookmarkService } from '../../services/bookmark/bookmark.service';

describe('BookmarkDetailsDialogComponent', () => {
  let component: BookmarkDetailsDialogComponent;
  let fixture: ComponentFixture<BookmarkDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarkDetailsDialogComponent, BrowserAnimationsModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { bookmarkId: 0 },
        },
        {
          provide: MatDialogRef,
          useValue: jasmine.createSpyObj('MatDialogRef', ['close']),
        },
        {
          provide: BookmarkService,
          useValue: {
            getBookmarkDetails: (_bookmarkId: any) => {
              return {
                subscribe: () => {},
              };
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BookmarkDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
