import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { BookmarkService } from '../../services/bookmark/bookmark.service';
import { Bookmark } from '../../models/bookmark/bookmark';

@Component({
  selector: 'app-bookmark-list',
  standalone: true,
  imports: [
    MatListModule,
  ],
  templateUrl: './bookmark-list.component.html',
  styleUrl: './bookmark-list.component.css'
})
export class BookmarkListComponent implements OnInit{
  
  bookmarks: Bookmark[] = []
  
  constructor(private bookmarkService: BookmarkService) {
  }
  
  
  ngOnInit(): void {
    this.bookmarkService.getBookmarks().subscribe({
      next: (bookmarks) => this.bookmarks = bookmarks
    })
  }


}
