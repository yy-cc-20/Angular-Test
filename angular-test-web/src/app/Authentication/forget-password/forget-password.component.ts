import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AngularTestApiService } from '../../angular-test-api.service';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { NgFor, NgIf, UpperCasePipe, Location } from '@angular/common';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgIf],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  resetPasswordForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
  });

  constructor(
    private apiService: AngularTestApiService,
  ) { }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      // go to api to make sure the username and password is match
      this.apiService.resetPassword(this.resetPasswordForm.value.username!)
        .subscribe({
          //next: () => {
          //  // tell user to check their email for temporary password
          //},
          error: (error) => {
            console.error('Login error:', error);
          },
          complete: () => {
            // tell user to check their email for temporary password
          }
        });
    } else {
      this.resetPasswordForm.markAllAsTouched();
    }
  }
}
