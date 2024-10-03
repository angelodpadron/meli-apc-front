import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogContent,
    MatFormField,
    MatDialogActions,
    MatDialogTitle,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<LoginComponent>
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.get('email')?.value!;
    const password = this.loginForm.get('password')?.value!;

    this.authService.login({ email, password }).subscribe({
      next: (response) => {
        this.dialogRef.close({ success: true, data: response });
      },
      error: (error) => {
        console.error('Error logging in:', error);
      },
    });
  }

  onRegister() {
    this.dialogRef.close();
    this.openRegisterDialog();
  }

  openRegisterDialog() {
    this.dialog.open(RegisterComponent, {
      width: '300px',
    });
  }
}
