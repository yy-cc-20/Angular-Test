import { Injectable, EventEmitter } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSessionKey = 'userSession';
  loginLogoutEvent = new EventEmitter();

  constructor(private router: Router) {
    
  }

  getLoginLogoutEvent() {
    return this.loginLogoutEvent;
  }

  login(userid: string, username: string) {
    if (typeof sessionStorage === 'undefined')
      return

    sessionStorage.setItem(this.userSessionKey, JSON.stringify({ userid, username }));
    this.loginLogoutEvent.emit();
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
    this.loginLogoutEvent.emit();
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
