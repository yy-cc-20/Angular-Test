import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AngularTestApiService } from '../../angular-test-api.service';
import { RouterModule, Router } from '@angular/router';
import { NgIf } from '@angular/common';
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
      this.apiService.login(this.loginForm.value.username!, this.loginForm.value.password!)
        .subscribe({
          next: (response) => {
            this.authenticationService.login(response.user_id, response.username);
        },
        error: (error) => {
          console.error('Login error:', error);
        },
          complete: () => {
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}

