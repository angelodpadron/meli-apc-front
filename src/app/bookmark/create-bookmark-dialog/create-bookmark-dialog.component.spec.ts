import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookmarkDialogComponent } from './create-bookmark-dialog.component';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookmarkService } from '../../services/bookmark/bookmark.service';

describe('CreateBookmarkDialogComponent', () => {
  let component: CreateBookmarkDialogComponent;
  let fixture: ComponentFixture<CreateBookmarkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBookmarkDialogComponent, BrowserAnimationsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: MatDialogRef,
          useValue: jasmine.createSpyObj('MatDialogRef', ['close']),
        },
        {
          provide: BookmarkService,
          useValue: {
            createBookmark: (_bookmark: any) => {
              return {
                subscribe: () => {},
              };
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateBookmarkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
