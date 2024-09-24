import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
//import { AuthenticationService } from './authentication.service';
import { inject } from '@angular/core';

export const authenticationGuard: CanActivateFn = (route, state) => {
  //const authenticationService = inject(AuthenticationService);
  const router = inject(Router);

  //if (authenticationService.isLoggedIn()) {
  //  return true;
  //}

  return router.parseUrl('Unauthorized');
};
