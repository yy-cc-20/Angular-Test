import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { inject } from '@angular/core';
import { Location } from '@angular/common'

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);
  const location = inject(Location);

  if (!authenticationService.isLoggedIn() && location.isCurrentPathEqualTo('/Login'))
    return true;
  else if (authenticationService.isLoggedIn() && location.isCurrentPathEqualTo('/Login'))
    return router.parseUrl('MyProfile')
  else if (authenticationService.isLoggedIn())
    return true;
  else
    return router.parseUrl('Unauthorized');
};
