import { Component } from '@angular/core';
import { technologyGroupsData } from '../../data/tech-stack';
import { TechBadgeComponent } from '../../shared/components/tech-badge/tech-badge.component';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [TechBadgeComponent],
  template: `
    <section class="tech-stack section" id="tech-stack">
      <div class="container">
        <div class="tech-stack__header">
          <p class="section__eyebrow">Stack tecnológico</p>
        </div>

        <div class="tech-stack__grid">
          @for (group of technologyGroupsData; track group.category) {
            <article class="tech-stack__card surface-card tech-frame">
              <h3 class="tech-stack__category">{{ group.category }}</h3>
              <div class="tech-stack__items">
                @for (tech of group.items; track tech.name) {
                  <app-tech-badge [label]="tech.name" [icon]="tech.icon" size="large"></app-tech-badge>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
  readonly technologyGroupsData = technologyGroupsData;
}
