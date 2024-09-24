import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AngularTestApiService } from '../../angular-test-api.service';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { NgFor, NgIf, UpperCasePipe, Location } from '@angular/common';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgIf],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private apiService: AngularTestApiService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  onSubmit() {
    if (this.loginForm.valid) {
      // go to api to make sure the username and password is match
      this.apiService.login(this.loginForm.value.username!, this.loginForm.value.password!)
        .subscribe({
          next: (response) => {
            // create session to store user info
            this.authenticationService.login(response.user_id, response.username);
        },
        error: (error) => {
          console.error('Login error:', error);
        },
          complete: () => {
          // redirect to next page
          this.router.navigate(['MyProfile']); 
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}

