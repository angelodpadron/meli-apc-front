import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkEditDialogComponent } from './bookmark-edit-dialog.component';

describe('BookmarkEditDialogComponent', () => {
  let component: BookmarkEditDialogComponent;
  let fixture: ComponentFixture<BookmarkEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarkEditDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
