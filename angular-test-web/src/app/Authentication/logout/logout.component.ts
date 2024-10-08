import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.apiService.logout(token)
    //  .subscribe({
    //    next: (response) => {
        this.authenticationService.logout();
        //},
        //error: (error) => {
        //  console.error('Logout error:', error);
        //},
        //complete: () => {
      //  }
      //});
  }
}
