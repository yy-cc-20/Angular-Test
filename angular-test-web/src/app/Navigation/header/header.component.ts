import { Component, OnInit, ChangeDetectorRef, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, ActivatedRoute, RouterModule, Router } from '@angular/router';
import { NgFor, NgIf, UpperCasePipe, Location } from '@angular/common';
import { AuthenticationService } from '../../Authentication/authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  time: string = '';
  isLoggedIn: boolean = false;
  username: string = '';
  private timer: any;
  loginLogoutEvent = this.authenticationService.getLoginLogoutEvent()

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.loginLogoutEvent.subscribe(() => {
      this.showLoginOrLogout()
    })
  }

  showLoginOrLogout() {
    this.isLoggedIn = this.authenticationService.isLoggedIn();

    if (this.isLoggedIn)
      this.username = this.authenticationService.getCurrentUser().username;
  }

  ngOnInit(): void {
    this.updateTime();
    this.showLoginOrLogout()
    //this.timer = setInterval(() => { this.updateTime(); }, 1000); // this line cause the web page loading none stop
  }

  updateTime(): void {
    this.time = new Date().toLocaleTimeString([],
      { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  ngOnDestroy(): void {
    //clearInterval(this.timer); 
  }
}
