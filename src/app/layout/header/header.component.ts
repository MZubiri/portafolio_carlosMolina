import { Component, signal } from '@angular/core';
import { navigationData, profileData } from '../../data/portfolio.data';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <div class="container header__inner surface-card">
        <a class="brand" href="#top" aria-label="Ir al inicio">
          <span class="brand__mark">CM</span>
          <span class="brand__copy">
            <strong>{{ profileData.name }}</strong>
            <span>{{ profileData.title }}</span>
          </span>
        </a>

        <nav class="header__nav" aria-label="Navegación principal">
          <a class="header__link" [href]="navigationData[0].href">{{ navigationData[0].label }}</a>
          <a class="header__link" [href]="navigationData[1].href">{{ navigationData[1].label }}</a>
          <a class="header__link header__link--accent" [href]="navigationData[2].href">{{ navigationData[2].label }}</a>
        </nav>

        <button class="header__toggle" type="button" (click)="toggleMenu()" [attr.aria-expanded]="isMenuOpen()" aria-controls="mobile-menu">
          <span class="sr-only">Abrir menú</span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      @if (isMenuOpen()) {
        <div class="container header__mobile surface-card" id="mobile-menu">
          <a class="header__mobile-link" [href]="navigationData[0].href" (click)="closeMenu()">{{ navigationData[0].label }}</a>
          <a class="header__mobile-link" [href]="navigationData[1].href" (click)="closeMenu()">{{ navigationData[1].label }}</a>
          <a class="header__mobile-link header__mobile-link--accent" [href]="navigationData[2].href" (click)="closeMenu()">{{ navigationData[2].label }}</a>
        </div>
      }
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly navigationData = navigationData;
  readonly profileData = profileData;
  readonly isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}