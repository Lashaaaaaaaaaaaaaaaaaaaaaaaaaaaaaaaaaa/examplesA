import { CanActivateFn } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  let user = sessionStorage.getItem('user');

  if (user) {
    return true;
  } else {
    return false;
  }
};
