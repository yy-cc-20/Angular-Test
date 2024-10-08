import { Component, EventEmitter, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf, UpperCasePipe, Location } from '@angular/common';

import { AuthenticationService } from './Authentication/authentication.service';
import { HeaderComponent } from './Navigation/header/header.component';
import { LeftMenuComponent } from './Navigation/left-menu/left-menu.component';
import { BreadcrumbComponent } from './Navigation/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, HeaderComponent, LeftMenuComponent, BreadcrumbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  loginLogoutEvent = this.authenticationService.getLoginLogoutEvent()

  constructor(
    private authenticationService: AuthenticationService,
  ) {
    this.loginLogoutEvent.subscribe(() => {
      this.isLoggedIn = this.authenticationService.isLoggedIn();
    })
  }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isLoggedIn();
  }
}
