import { Component } from '@angular/core';

import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthHandlerComponent } from '../../../views/auth/auth-handler/auth-handler.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    AuthHandlerComponent,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  constructor(private router: Router) {}

  async onSearch(event: any) {
    let searchTerm = event.target.value;
    this.router.navigate(['/search'], { queryParams: { keyword: searchTerm } });
  }
}
