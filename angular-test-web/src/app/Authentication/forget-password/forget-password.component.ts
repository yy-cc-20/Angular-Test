import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AngularTestApiService } from '../../angular-test-api.service';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgIf],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  showCheckEmailMessage = false;
  resetPasswordForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
  });

  constructor(
    private apiService: AngularTestApiService,
  ) { }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      alert("Please check your email for new password.");
    } else {
      this.resetPasswordForm.markAllAsTouched();
    }
  }
}
