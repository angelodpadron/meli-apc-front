import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { LoginComponent } from '../login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        {
          provide: MatDialogRef,
          useValue: { close: () => of(true) },
        },
        {
          provide: AuthService,
          useValue: { register: (_args: any) => ({ subscribe: () => {} }) },
        },
      ],
      imports: [RegisterComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
