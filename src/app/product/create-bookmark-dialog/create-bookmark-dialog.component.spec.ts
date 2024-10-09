import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookmarkDialogComponent } from './create-bookmark-dialog.component';

describe('CreateBookmarkDialogComponent', () => {
  let component: CreateBookmarkDialogComponent;
  let fixture: ComponentFixture<CreateBookmarkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBookmarkDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBookmarkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
