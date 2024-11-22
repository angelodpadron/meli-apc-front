import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSoldListComponent } from './most-sold-list.component';
import { AdminService } from '../../services/admin/admin.service';

describe('MostSoldListComponent', () => {
  let component: MostSoldListComponent;
  let fixture: ComponentFixture<MostSoldListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: AdminService,
          useValue: { topFiveMostSold: () => ({ subscribe: () => {} }) },
        },
      ],
      imports: [MostSoldListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MostSoldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
