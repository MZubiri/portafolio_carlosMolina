import { Component } from '@angular/core';
import { contactLinksData } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer" id="contact">
      <div class="container footer__shell surface-card tech-frame">
        <div class="footer__copy">
          <p class="section__eyebrow">Contacto</p>
          <h2 class="section__title footer__title">Contacto</h2>
          <p class="footer__intro">Actualmente busco oportunidades para seguir creciendo como desarrollador Full Stack.</p>
        </div>

        <div class="footer__links" aria-label="Canales de contacto">
          @for (contact of contactLinksData; track contact.label) {
            @if (contact.available) {
              <a class="footer__link" [href]="contact.href" [attr.aria-label]="contact.ariaLabel" target="_blank" rel="noreferrer">
                <span class="footer__icon" aria-hidden="true">
                  @if (getIconClass(contact.label)) {
                    <i [attr.class]="getIconClass(contact.label)"></i>
                  } @else {
                    {{ getIconText(contact.label) }}
                  }
                </span>
                <span class="footer__link-label">{{ contact.label }}</span>
                <span class="footer__link-value">Disponible</span>
              </a>
            } @else {
              <span class="footer__link footer__link--disabled" [attr.aria-label]="contact.ariaLabel">
                <span class="footer__icon" aria-hidden="true">{{ getIconText(contact.label) }}</span>
                <span class="footer__link-label">{{ contact.label }}</span>
                <span class="footer__link-value">Próximamente</span>
              </span>
            }
          }
        </div>
      </div>

      <div class="container footer__meta">
        <p>© {{ currentYear }} Carlos Molina.</p>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly contactLinksData = contactLinksData;
  readonly currentYear = new Date().getFullYear();

  getIconClass(label: string): string {
    const normalized = label.toLowerCase();

    if (normalized === 'linkedin') {
      return 'devicon-linkedin-plain';
    }

    if (normalized === 'github') {
      return 'devicon-github-original';
    }

    return '';
  }

  getIconText(label: string): string {
    const normalized = label.toLowerCase();

    if (normalized === 'correo') {
      return '@';
    }

    if (normalized === 'whatsapp') {
      return 'WA';
    }

    if (normalized === 'linkedin') {
      return 'in';
    }

    if (normalized === 'github') {
      return 'GH';
    }

    return label.slice(0, 1).toUpperCase();
  }
}