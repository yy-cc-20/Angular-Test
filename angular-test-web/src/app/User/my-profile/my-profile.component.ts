import { Component, OnInit } from '@angular/core';
import { AngularTestApiService } from '../../angular-test-api.service';
import { AuthenticationService } from '../../Authentication/authentication.service';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent implements OnInit {
  username = '';
  email = '';
  constructor(
    private apiService: AngularTestApiService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.apiService.getProfile(this.authenticationService.getCurrentUser()!.userid)
      .subscribe({
        next: (response) => {
          this.username = response.username;
          this.email = response.email;
        },
        error: (error) => {
          console.error('My profile error:', error);
        },
        complete: () => {
          
        }
      });
  }
}
