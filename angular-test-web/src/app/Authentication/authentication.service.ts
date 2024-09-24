import { Injectable } from '@angular/core';
import { User } from '../User/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSessionKey = 'userSession';

  constructor() { }

  login(userid: string, username: string) {
    sessionStorage.setItem(this.userSessionKey, JSON.stringify({ userid, username}));
  }

  isLoggedIn(): boolean {
    const userSession = sessionStorage.getItem(this.userSessionKey);
    return userSession !== null;
  }

  logout() {
    sessionStorage.removeItem(this.userSessionKey);
  }

  getCurrentUser(): any {
    const userSession = sessionStorage.getItem(this.userSessionKey);
    if (userSession) {
      return JSON.parse(userSession);
    }
    return null;
  }
}
