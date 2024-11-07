import {TestBed} from '@angular/core/testing';

import {PurchaseService} from './purchase.service';

import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('PurchaseService', () => {
  let service: PurchaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        PurchaseService,
      ],
      imports: []
    });
    service = TestBed.inject(PurchaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
