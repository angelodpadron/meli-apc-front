import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthHandlerComponent } from './auth-handler.component';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

describe('AuthHandlerComponent', () => {
  let component: AuthHandlerComponent;
  let fixture: ComponentFixture<AuthHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        AuthHandlerComponent,
      ],
      imports: [AuthHandlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
