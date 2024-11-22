import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';

import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter([]),
        AppComponent,
        JwtHelperService,
        {
          provide: JWT_OPTIONS,
          useValue: {},
        },
      ],
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
