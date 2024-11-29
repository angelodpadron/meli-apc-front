import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';

export const isLoggedInGuard: CanActivateFn = (_route, _state) => {
  const authService = inject(AuthService)
  return authService.logged()
};
