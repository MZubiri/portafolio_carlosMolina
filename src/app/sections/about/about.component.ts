import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about section" id="about">
      <div class="container about__shell surface-card tech-frame">
        <div class="about__header">
          <p class="section__eyebrow">Sobre mí</p>
          <h2 class="section__title">Perfil orientado a producto, backend y despliegues reales.</h2>
        </div>

        <div class="about__content">
          <p>
            Soy estudiante de último ciclo de Computación e Informática en Cibertec y me enfoco en construir software que pueda vivir en producción, no solo en maquetas.
          </p>
          <p>
            Trabajo con Angular, ASP.NET Core, Spring Boot y SQL Server para desarrollar interfaces, APIs REST, autenticación, roles y paneles administrativos.
          </p>
          <p>
            Me interesa la arquitectura de software, la automatización y los despliegues en Linux con Nginx y VPS.
          </p>
        </div>

        <div class="about__highlights" aria-label="Enfoques principales">
          <div class="about__highlight">
            <span class="about__highlight-label">Enfoque</span>
            <span class="about__highlight-value">Full stack y entrega end-to-end</span>
          </div>
          <div class="about__highlight">
            <span class="about__highlight-label">Prioridad</span>
            <span class="about__highlight-value">Interfaces claras, APIs sólidas y despliegue estable</span>
          </div>
          <div class="about__highlight">
            <span class="about__highlight-label">Contexto</span>
            <span class="about__highlight-value">Entornos reales con Linux, JWT y control de acceso</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about.component.scss'
})
export class AboutComponent {}