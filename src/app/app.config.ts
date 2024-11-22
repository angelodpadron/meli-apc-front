import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

const tokenGetter = () => localStorage.getItem('token');

const jwtProviderConfig = () => {
  const baseApi = 'localhost:8080';

  return JwtModule.forRoot({
    config: {
      tokenGetter,
      allowedDomains: [baseApi],
      disallowedRoutes: [
        `http://${baseApi}/api/products `,
        `http://${baseApi}/api/auth`,
      ],
    },
  });
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(jwtProviderConfig()),
  ],
};
