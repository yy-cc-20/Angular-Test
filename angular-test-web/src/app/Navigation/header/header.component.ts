import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet, ActivatedRoute, RouterModule, Router } from '@angular/router';
import { NgFor, NgIf, UpperCasePipe, Location } from '@angular/common';
import { Subscription, interval } from 'rxjs';
//import { AuthenticationService } from '../Authentication/authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  time: string = '';
  isLoggedIn: boolean = false;
  username: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isLoggedIn();

    if (this.isLoggedIn)
      this.username = this.authenticationService.getUser().username;

    this.updateTime();
    //setInterval(() => {
    //  this.updateTime();
    //}, 1000);
  }

  updateTime(): void {
    this.time = new Date().toLocaleTimeString([],
      { hour: '2-digit', minute: '2-digit', hour12: true });
    //console.log(this.time);
  }

  logout(): void {
    this.authenticationService.clearUser();
    this.router.navigate(['Dashboard']); 
  }
}
