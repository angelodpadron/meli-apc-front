import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogContent,
  MatDialogActions,
  MatDialogTitle,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
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
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<RegisterComponent>
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onRegister(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const email = this.registerForm.get('email')?.value!;
    const password = this.registerForm.get('password')?.value!;

    this.authService.register({ email, password }).subscribe({
      next: (response) => {
        this.dialogRef.close({ success: true, data: response });
      },
      error: (error) => {
        console.error('Error registering:', error);
      },
    });
  }

  onLogin() {
    this.dialogRef.close();
    this.dialog.open(LoginComponent, {
      width: '300px',
    });
  }
}
