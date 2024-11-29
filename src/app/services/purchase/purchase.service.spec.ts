import { TestBed } from '@angular/core/testing';

import { PurchaseService } from './purchase.service';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

describe('PurchaseService', () => {
  let service: PurchaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        PurchaseService,
        {
          provide: AuthService,
          useValue: { logged: () => ({ subscribe: () => {} }) },
        },
      ],
      imports: [],
    });
    service = TestBed.inject(PurchaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
