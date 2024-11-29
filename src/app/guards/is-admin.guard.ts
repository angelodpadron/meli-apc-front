import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth/auth.service";

export const isAdminGuard: CanActivateFn = (_route, _state) => {
  const authService = inject(AuthService)
  return authService.getRole() === 'ROLE_ADMIN'
};
