import { Component } from '@angular/core';
import { HeaderComponent } from './shared/layout/toolbar/toolbar.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isHomeRoute = false;

  constructor(private router: Router) {
    this.router.events.subscribe(
      () => (this.isHomeRoute = this.router.url === '/')
    );
  }
}
