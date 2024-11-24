import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkListComponent } from './bookmark-list.component';
import { BookmarkService } from '../../../services/bookmark/bookmark.service';

describe('BookmarkListComponent', () => {
  let component: BookmarkListComponent;
  let fixture: ComponentFixture<BookmarkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarkListComponent],
      providers: [
        {
          provide: BookmarkService,
          useValue: {
            getBookmarks: () => {
              return {
                subscribe: () => {},
              };
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BookmarkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
