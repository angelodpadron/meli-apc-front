import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../../services/auth.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-auth-handler',
  standalone: true,
  imports: [MatIcon, MatIconButton, MatMenuModule],
  templateUrl: './auth-handler.component.html',
  styleUrl: './auth-handler.component.css',
})
export class AuthHandlerComponent {
  constructor(private dialog: MatDialog, private authService: AuthService) {}

  openLoginDialog() {
    this.dialog.open(LoginComponent, {
      width: '400px',
    });
  }

  handleLogout() {
    this.authService.logout();
  }

  logged() {
    return this.authService.logged();
  }
}
