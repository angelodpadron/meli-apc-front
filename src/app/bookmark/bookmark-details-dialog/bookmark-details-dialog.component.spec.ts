import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkDetailsDialogComponent } from './bookmark-details-dialog.component';

describe('BookmarkDetailsDialogComponent', () => {
  let component: BookmarkDetailsDialogComponent;
  let fixture: ComponentFixture<BookmarkDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarkDetailsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
