import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        provideHttpClient(withInterceptorsFromDi()),
        JwtHelperService,
        {
          provide: JWT_OPTIONS,
          useValue: {},
        },
      ],
      imports: [],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
