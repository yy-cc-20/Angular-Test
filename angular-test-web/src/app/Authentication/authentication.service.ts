import { Injectable } from '@angular/core';
import { User } from '../User/user.model';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSessionKey = 'userSession';

  constructor(private router: Router) { }

  login(userid: string, username: string) {
    if (typeof sessionStorage === 'undefined')
      return

    sessionStorage.setItem(this.userSessionKey, JSON.stringify({ userid, username }));
    this.router.navigate(['MyProfile']);
    //window.location.reload();
  }

  isLoggedIn(): boolean {
    if (typeof sessionStorage === 'undefined')
      return false;

    const userSession = sessionStorage.getItem(this.userSessionKey);
    return userSession !== null;
  }

  logout() {
    if (typeof sessionStorage === 'undefined')
      return

    sessionStorage.removeItem(this.userSessionKey);
    this.router.navigate(['Dashboard']);
    //window.location.reload();

  }

  getCurrentUser(): any {
    if (typeof sessionStorage === 'undefined')
      return

    const userSession = sessionStorage.getItem(this.userSessionKey);
    if (!userSession) {
      return null;  
    }
    return JSON.parse(userSession);
  }
}
