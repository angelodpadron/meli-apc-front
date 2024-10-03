import { Component } from '@angular/core';

import { Router, RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthHandlerComponent } from '../../auth/auth-handler/auth-handler.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    AuthHandlerComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  constructor(private router: Router) {}

  async onSearch(event: any) {
    let searchTerm = event.target.value;
    this.router.navigate(['/search'], { queryParams: { keyword: searchTerm } });
  }
}
