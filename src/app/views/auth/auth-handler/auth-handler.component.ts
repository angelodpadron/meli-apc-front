import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../../../services/auth/auth.service';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-handler',
  standalone: true,
  imports: [MatIcon, MatIconButton, MatMenuModule, RouterModule],
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

  isAdmin() {
    return this.authService.getRole() === 'ROLE_ADMIN';
  }
}
