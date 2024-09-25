import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe, Location } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

import { AngularTestApiService } from '../../angular-test-api.service';
import { AuthenticationService } from '../../Authentication/authentication.service';

@Component({
  selector: 'app-change-password-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './change-password-form.component.html',
  styleUrl: './change-password-form.component.css'
})
export class ChangePasswordFormComponent {
  passwordNotMatch = false;
  showPasswordChangeMessage = false;
  error = '';

  changePasswordForm = new FormGroup({
    currentPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required, Validators.maxLength(45)]),
    confirmNewPassword: new FormControl('', [Validators.required]),
  });

  constructor(
    private apiService: AngularTestApiService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  onSubmit() {
    if (!this.changePasswordForm.valid) {
      this.changePasswordForm.markAllAsTouched();
      return;
    }

    if (!this.passwordIsMatch()) {
      return;
    }

    this.apiService
      .changePassword(this.authenticationService.getCurrentUser().userid!,
        this.changePasswordForm.value.currentPassword!,
        this.changePasswordForm.value.newPassword!)
      .subscribe({
        next: (response) => {
            
        },
        error: (error) => {
          this.error = error.error.errors.New_password[0];
          console.error('Change password error:', this.error);
        },
        complete: () => {
          alert("Password has been changed.");
          window.location.reload();
        }
      });
  }

  passwordIsMatch() {
    return this.changePasswordForm.value.newPassword!
      === this.changePasswordForm.value.confirmNewPassword!
  }
}
