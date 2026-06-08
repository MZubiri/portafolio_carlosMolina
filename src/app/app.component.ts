import { Component } from '@angular/core';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { TechStackComponent } from './sections/tech-stack/tech-stack.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, TechStackComponent, ProjectsComponent, FooterComponent],
  template: `
    <div class="page-shell" id="top">
      <main class="page-shell__main">
        <app-hero></app-hero>
        <app-tech-stack></app-tech-stack>
        <app-projects></app-projects>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {}