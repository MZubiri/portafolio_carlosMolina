import { Component, Input } from '@angular/core';
import { normalizeTechnologyName, technologyIconMap } from '../../../data/tech-stack';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  template: `
    <span [class]="badgeClasses" [attr.title]="label" [attr.aria-label]="label">
      @if (iconClass) {
        <img class="tech-badge__icon" [src]="iconClass" alt="" aria-hidden="true" loading="lazy" />
      } @else {
        <span class="tech-badge__fallback" aria-hidden="true">{{ label.slice(0, 1) }}</span>
      }
      <span class="tech-badge__label">{{ label }}</span>
    </span>
  `,
  styleUrl: './tech-badge.component.scss'
})
export class TechBadgeComponent {
  @Input({ required: true }) label = '';
  @Input() icon = '';
  @Input() size: 'default' | 'large' = 'default';

  get badgeClasses(): string {
    return this.size === 'large' ? 'tech-badge tech-badge--large' : 'tech-badge';
  }

  get iconClass(): string {
    if (this.icon) {
      return this.icon;
    }

    const normalizedLabel = normalizeTechnologyName(this.label);

    return (
      technologyIconMap[normalizedLabel] ??
      Object.entries(technologyIconMap).find(([key]) => normalizedLabel.includes(key))?.[1] ??
      ''
    );
  }
}
