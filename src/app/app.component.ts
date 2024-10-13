import { Component } from '@angular/core';
import { HeaderComponent } from './shared/layout/toolbar/toolbar.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isHomeRoute = false;
  message = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/') {
          this.isHomeRoute = true;
          this.message = '';
          setTimeout(() => this.typeWritter(), 1000);
          return;
        }
        this.isHomeRoute = false;
      }
    });
  }

  typeWritter() {
    const templates = [
      'Intenta buscar algo supongo ¯\\_(ツ)_/¯',
      'Algo debería estar aquí... Pero no está (・_・;)',
      'Es y no es una landing page... Usted me entiende (¬‿¬)',
      'Yo se que oyes mis pensamientos Galperin... Ñam ñam ñam ñam, ñam ñam ñam ñam (ಠ_ಠ)',
    ];
    this.write(templates[Math.floor(Math.random() * templates.length)]);
  }

  write(message: string, currentIndex: number = 0) {
    if (currentIndex >= message.length) return;
    this.message =
      this.message.slice(0, -1) +
      message.charAt(currentIndex) +
      (currentIndex + 1 >= message.length ? '' : '▌');
    setTimeout(() => this.write(message, currentIndex + 1), 25);
  }
}
