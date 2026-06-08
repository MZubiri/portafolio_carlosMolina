import { Component, HostListener } from '@angular/core';
import { ProjectModel } from '../../models/project.model';
import { projectsData } from '../../data/portfolio.data';
import { TechBadgeComponent } from '../../shared/components/tech-badge/tech-badge.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TechBadgeComponent],
  template: `
    <section class="projects section" id="projects">
      <div class="container">
        <h2 class="section__title projects__title">Proyectos</h2>

        <div class="projects__grid">
          @for (project of projectsData; track project.name; let index = $index) {
            <article class="project-card surface-card tech-frame" [class.project-card--featured]="index === 0">
              <div class="project-card__top">
                <div>
                  <p class="project-card__eyebrow">{{ project.featured ? 'Proyecto destacado' : 'Caso ' + (index + 1) }}</p>
                  <h3 class="project-card__title">{{ project.name }}</h3>
                </div>

                <span class="project-card__status">{{ project.status }}</span>
              </div>

              <p class="project-card__summary">{{ project.summary }}</p>

              @if (getScreenshots(project).length > 0) {
                <figure class="project-card__media">
                  <button
                    type="button"
                    class="project-card__media-trigger"
                    (click)="openLightbox(project)"
                    [attr.aria-label]="'Ampliar captura de ' + project.name"
                  >
                    <img [src]="getCurrentScreenshot(project)" [alt]="'Captura del proyecto ' + project.name" loading="lazy">
                  </button>

                  @if (getScreenshots(project).length > 1) {
                    <div class="project-card__carousel-controls">
                      <button type="button" class="project-card__carousel-btn" (click)="previousSlide(project)" [attr.aria-label]="'Imagen anterior de ' + project.name">‹</button>
                      <div class="project-card__carousel-dots" aria-label="Indicadores de imagen">
                        @for (image of getScreenshots(project); track image; let imageIndex = $index) {
                          <button
                            type="button"
                            class="project-card__carousel-dot"
                            [class.project-card__carousel-dot--active]="imageIndex === getCurrentSlide(project)"
                            (click)="setSlide(project, imageIndex)"
                            [attr.aria-label]="'Ver imagen ' + (imageIndex + 1) + ' de ' + project.name"
                          ></button>
                        }
                      </div>
                      <button type="button" class="project-card__carousel-btn" (click)="nextSlide(project)" [attr.aria-label]="'Imagen siguiente de ' + project.name">›</button>
                    </div>
                  }
                </figure>
              } @else {
                <div class="project-card__media project-card__media--placeholder" aria-label="Captura pendiente">
                  Captura pendiente
                </div>
              }

              <div class="project-card__section">
                <span class="project-card__label">Problema</span>
                <p>{{ project.problem }}</p>
              </div>

              <div class="project-card__section">
                <span class="project-card__label">Qué construí</span>
                <p>{{ project.built }}</p>
              </div>

              <div class="project-card__meta">
                <div>
                  <span class="project-card__label">Stack</span>
                  <div class="project-card__techs">
                    @for (tech of project.technologies; track tech) {
                      <app-tech-badge [label]="tech"></app-tech-badge>
                    }
                  </div>
                </div>

                <div>
                  <span class="project-card__label">Detalles técnicos</span>
                  <div class="project-card__chips project-card__chips--details">
                    @for (detail of project.details; track detail) {
                      <span>{{ detail }}</span>
                    }
                  </div>
                </div>
              </div>

              <div class="project-card__actions">
                @for (action of project.actions; track action.label) {
                  @if (action.available) {
                    <a class="project-card__button project-card__button--primary" [href]="action.href" [attr.aria-label]="action.ariaLabel" target="_blank" rel="noreferrer">
                      <span class="project-card__button-label">{{ action.label }}</span>
                      <span class="project-card__button-note">{{ action.statusText }}</span>
                    </a>
                  } @else {
                    <span class="project-card__button project-card__button--disabled" [attr.aria-label]="action.ariaLabel">
                      <span class="project-card__button-label">{{ action.label }}</span>
                      <span class="project-card__button-note">{{ action.statusText }}</span>
                    </span>
                  }
                }
              </div>

              @if (project.note) {
                <p class="project-card__note">{{ project.note }}</p>
              }
            </article>
          }
        </div>
      </div>
    </section>

    @if (selectedProject; as project) {
      <div class="project-lightbox" role="dialog" aria-modal="true" [attr.aria-label]="'Capturas ampliadas de ' + project.name" (click)="closeLightbox()">
        <div class="project-lightbox__panel" (click)="$event.stopPropagation()">
          <div class="project-lightbox__top">
            <div>
              <p class="project-lightbox__eyebrow">{{ project.name }}</p>
              <h3 class="project-lightbox__title">Captura {{ selectedImageIndex + 1 }} de {{ getScreenshots(project).length }}</h3>
            </div>

            <button type="button" class="project-lightbox__close" (click)="closeLightbox()" [attr.aria-label]="'Cerrar capturas de ' + project.name">×</button>
          </div>

          <div class="project-lightbox__media">
            <img [src]="getLightboxImage()" [alt]="'Captura ampliada del proyecto ' + project.name">
          </div>

          @if (getScreenshots(project).length > 1) {
            <div class="project-lightbox__controls">
              <button type="button" class="project-lightbox__control" (click)="previousLightboxImage()" [attr.aria-label]="'Imagen anterior de ' + project.name">‹</button>
              <div class="project-lightbox__dots" aria-label="Indicadores de captura ampliada">
                @for (image of getScreenshots(project); track image; let imageIndex = $index) {
                  <button
                    type="button"
                    class="project-lightbox__dot"
                    [class.project-lightbox__dot--active]="imageIndex === selectedImageIndex"
                    (click)="selectedImageIndex = imageIndex"
                    [attr.aria-label]="'Ver captura ampliada ' + (imageIndex + 1) + ' de ' + project.name"
                  ></button>
                }
              </div>
              <button type="button" class="project-lightbox__control" (click)="nextLightboxImage()" [attr.aria-label]="'Imagen siguiente de ' + project.name">›</button>
            </div>
          }
        </div>
      </div>
    }
  `,
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly projectsData = projectsData;
  selectedProject: ProjectModel | null = null;
  selectedImageIndex = 0;
  private readonly slideByProject: Record<string, number> = {};

  @HostListener('document:keydown.escape')
  closeLightboxFromKeyboard(): void {
    this.closeLightbox();
  }

  @HostListener('document:keydown.arrowleft')
  previousLightboxImageFromKeyboard(): void {
    this.previousLightboxImage();
  }

  @HostListener('document:keydown.arrowright')
  nextLightboxImageFromKeyboard(): void {
    this.nextLightboxImage();
  }

  getScreenshots(project: ProjectModel): readonly string[] {
    return project.screenshots ?? [];
  }

  getCurrentSlide(project: ProjectModel): number {
    return this.slideByProject[project.name] ?? 0;
  }

  getCurrentScreenshot(project: ProjectModel): string {
    const screenshots = this.getScreenshots(project);

    if (screenshots.length === 0) {
      return '';
    }

    const current = this.getCurrentSlide(project);
    const safeIndex = Math.min(Math.max(current, 0), screenshots.length - 1);

    return screenshots[safeIndex];
  }

  setSlide(project: ProjectModel, index: number): void {
    const screenshots = this.getScreenshots(project);

    if (screenshots.length === 0) {
      return;
    }

    const safeIndex = Math.min(Math.max(index, 0), screenshots.length - 1);
    this.slideByProject[project.name] = safeIndex;
  }

  previousSlide(project: ProjectModel): void {
    const screenshots = this.getScreenshots(project);

    if (screenshots.length <= 1) {
      return;
    }

    const current = this.getCurrentSlide(project);
    const next = (current - 1 + screenshots.length) % screenshots.length;
    this.slideByProject[project.name] = next;
  }

  nextSlide(project: ProjectModel): void {
    const screenshots = this.getScreenshots(project);

    if (screenshots.length <= 1) {
      return;
    }

    const current = this.getCurrentSlide(project);
    const next = (current + 1) % screenshots.length;
    this.slideByProject[project.name] = next;
  }

  openLightbox(project: ProjectModel): void {
    const screenshots = this.getScreenshots(project);

    if (screenshots.length === 0) {
      return;
    }

    this.selectedProject = project;
    this.selectedImageIndex = this.getCurrentSlide(project);
  }

  closeLightbox(): void {
    this.selectedProject = null;
    this.selectedImageIndex = 0;
  }

  getLightboxImage(): string {
    if (!this.selectedProject) {
      return '';
    }

    const screenshots = this.getScreenshots(this.selectedProject);

    if (screenshots.length === 0) {
      return '';
    }

    const safeIndex = Math.min(Math.max(this.selectedImageIndex, 0), screenshots.length - 1);

    return screenshots[safeIndex];
  }

  previousLightboxImage(): void {
    if (!this.selectedProject) {
      return;
    }

    const screenshots = this.getScreenshots(this.selectedProject);

    if (screenshots.length <= 1) {
      return;
    }

    this.selectedImageIndex = (this.selectedImageIndex - 1 + screenshots.length) % screenshots.length;
    this.setSlide(this.selectedProject, this.selectedImageIndex);
  }

  nextLightboxImage(): void {
    if (!this.selectedProject) {
      return;
    }

    const screenshots = this.getScreenshots(this.selectedProject);

    if (screenshots.length <= 1) {
      return;
    }

    this.selectedImageIndex = (this.selectedImageIndex + 1) % screenshots.length;
    this.setSlide(this.selectedProject, this.selectedImageIndex);
  }
}
