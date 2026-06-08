import { Component } from '@angular/core';
import { profileData } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero section">
      <div class="container hero__grid">
        <div class="hero__content">
          <p class="section__eyebrow">Full Stack Developer</p>
          <h1 class="hero__title">
            <span>{{ profileData.name }}</span>
            <span>{{ profileData.title }}</span>
          </h1>

          <p class="hero__subtitle">
            {{ profileData.subtitle }}
          </p>

          <p class="hero__summary">
            {{ profileData.summary }}
          </p>

          <div class="hero__actions">
            <a class="hero__button hero__button--primary" href="#projects">Ver proyectos</a>
            <a class="hero__button hero__button--ghost" href="assets/docs/CVCarlosMolina.pdf" download="Carlos-Molina-CV.pdf">Descargar CV</a>
            <a class="hero__button hero__button--secondary" href="#contact">Contacto</a>
          </div>
        </div>

        <aside class="hero__profile surface-card tech-frame" aria-label="Perfil profesional">
          <div class="hero__profile-photo-wrap">
            <img
              class="hero__profile-photo"
              src="assets/images/FOTOCARLOSMOLINA.png"
              alt="Fotografía profesional de Carlos Molina"
            >
          </div>

          <div class="hero__profile-body">
            <div class="hero__profile-copy">
              <p class="hero__profile-name">Carlos Molina</p>
              <p class="hero__profile-availability">Disponible para oportunidades</p>
              <p class="hero__profile-location">Ubicación: Perú</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  `,
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  readonly profileData = profileData;
}