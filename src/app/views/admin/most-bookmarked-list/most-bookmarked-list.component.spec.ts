import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostBookmarkedListComponent } from './most-bookmarked-list.component';
import { AdminService } from '../../../services/admin/admin.service';

describe('MostBookmarkedListComponent', () => {
  let component: MostBookmarkedListComponent;
  let fixture: ComponentFixture<MostBookmarkedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: AdminService,
          useValue: { topFiveBookmarked: () => ({ subscribe: () => {} }) },
        },
      ],
      imports: [MostBookmarkedListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MostBookmarkedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
