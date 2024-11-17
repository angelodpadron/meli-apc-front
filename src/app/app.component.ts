import {Component} from '@angular/core';
import {ToolbarComponent} from './shared/layout/toolbar/toolbar.component';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {typewriter} from "./shared/utils/typewriter";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToolbarComponent, RouterOutlet],
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
          setTimeout(() => this.typeWriter(), 1000);
          return;
        }
        this.isHomeRoute = false;
      }
    });
  }

  typeWriter() {
    const templates = [
      'Intenta buscar algo supongo ¯\\_(ツ)_/¯',
      'Algo debería estar aquí... Pero no está (・_・;)',
      'Es y no es una landing page... Usted me entiende (¬‿¬)',
    ];
    typewriter(templates[Math.floor(Math.random() * templates.length)], (value: string) => this.message = value);
  }


}
