import { ContactLinkModel } from '../models/contact-link.model';
import { ProfileModel } from '../models/profile.model';
import { ProjectModel } from '../models/project.model';
export { technologyGroupsData } from './tech-stack';

export const profileData: ProfileModel = {
  name: 'Carlos Molina',
  title: 'Full Stack Developer',
  subtitle: 'Construyo aplicaciones web completas: frontend, API, base de datos y despliegue en Linux.',
  summary: 'Soy egresado de Computación e Informática en Cibertec y me enfoco en construir software que pueda vivir en producción, no solo en maquetas. Trabajo con Angular, ASP.NET Core, Spring Boot y SQL Server para desarrollar interfaces, APIs REST, autenticación, roles y paneles administrativos. Me interesa la arquitectura de software, la automatización y los despliegues en Linux con Nginx y VPS.',
  location: 'Perú'
};

export const navigationData = [
  { label: 'Inicio', href: '#top' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' }
] as const;

export const projectsData: readonly ProjectModel[] = [
  {
    name: 'Imperius Draconis',
    summary: 'Plataforma web para una comunidad temática, con beta moderna desplegada y migración desde la versión anterior en ASP.NET MVC.',
    problem: 'La plataforma anterior necesitaba evolucionar hacia una arquitectura moderna, mantenible y lista para crecer sin perder el flujo operativo existente.',
    built: 'Construí la nueva experiencia con Angular y ASP.NET Core, integrando API REST, autenticación JWT, roles, recuperación de contraseña y despliegue en Linux.',
    technologies: ['Angular', 'TypeScript', 'ASP.NET Core', 'C#', 'SQL Server', 'REST APIs', 'JWT Authentication', 'Linux VPS', 'Nginx', 'GitHub'],
    details: [
      'Migración desde ASP.NET MVC',
      'API REST',
      'Autenticación JWT',
      'Roles y permisos',
      'Dashboard operativo',
      'Tienda interna',
      'Economía virtual',
      'Gestión de usuarios',
      'Recuperación de contraseña',
      'Historial de movimientos',
      'Despliegue en VPS Linux'
    ],
    status: 'Beta desplegada / versión anterior activa',
    screenshots: [
      'assets/images/projects/imperius-draconis-dashboard.png',
      'assets/images/projects/imperius-draconis-inside.png',
      'assets/images/projects/imperius-draconis.png',
      'assets/images/projects/imperius-draconis-2.png'
    ],
    actions: [
      {
        label: 'Ver beta',
        href: 'https://beta.imperiusdraconis.lat/login',
        available: true,
        statusText: 'Desplegada',
        ariaLabel: 'Abrir beta desplegada de Imperius Draconis'
      },
      {
        label: 'Versión anterior',
        href: 'https://imperiusdraconis.lat/',
        available: true,
        statusText: 'Activa',
        ariaLabel: 'Abrir versión anterior de Imperius Draconis'
      },
      {
        label: 'Código',
        href: 'https://github.com/MZubiri/ImperiusDraconis-Core',
        available: true,
        statusText: 'Público',
        ariaLabel: 'Abrir repositorio público de Imperius Draconis en GitHub'
      }
    ],
    featured: true
  },
  {
    name: 'BINGO',
    summary: 'Sistema web para asignar cartones de bingo ya generados en CSV, con panel administrativo y flujo de representantes.',
    problem: 'La organización necesitaba conservar 3000 cartones seriados, controlar disponibilidad por agrupación y asignarlos sin duplicados ni pérdida de trazabilidad.',
    built: 'Construí una plataforma full stack con Angular y Spring Boot: importa cartones por CSV, protege rutas por rol, administra disponibilidad, asigna cartones con idempotencia y genera PDFs compartibles.',
    technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Java 21', 'Spring Boot', 'Spring Security', 'MySQL', 'JWT', 'Docker', 'Maven', 'REST APIs', 'Linux VPS', 'Nginx', 'SSL / HTTPS'],
    details: [
      'Login por roles',
      'Panel administrador',
      'Panel representante',
      'Importación de CSV',
      '3000 cartones seriados',
      'Filtros por agrupación y estado',
      'Dashboard de disponibilidad',
      'Asignación idempotente',
      'Bloqueo pesimista',
      'PDF de cartón',
      'Verificación pública',
      'Historial de operaciones',
      'Despliegue con HTTPS'
    ],
    status: 'Desplegado',
    screenshots: [
      'assets/images/projects/bingo-admin.png',
      'assets/images/projects/bingo-vendedor-generar.png',
      'assets/images/projects/bingo-vendedor.png',
      'assets/images/projects/bingo-login.png'
    ],
    actions: [
      {
        label: 'Ver plataforma',
        href: 'https://geourp.org/bingo/login',
        available: true,
        statusText: 'Desplegada',
        ariaLabel: 'Abrir plataforma BINGO desplegada'
      },
      {
        label: 'Código',
        href: 'https://github.com/MZubiri/sistema-bingo',
        available: true,
        statusText: 'Público',
        ariaLabel: 'Abrir repositorio público de BINGO en GitHub'
      }
    ],
    featured: false
  },
  {
    name: 'GeoURP',
    summary: 'Portal institucional organizado como monorepo, con frontend Angular, API ASP.NET Core y scripts SQL auxiliares.',
    problem: 'La institución necesitaba un portal editable por roles, con contenido público, procesos internos separados y una base técnica fácil de mantener.',
    built: 'Desarrollé el frontend Angular, la API ASP.NET Core, la estructura de base de datos y la publicación segura sobre Linux VPS.',
    technologies: ['Angular', 'TypeScript', 'ASP.NET Core', 'C#', 'SQL Server', 'REST APIs', 'Linux VPS', 'Nginx', 'SSL / HTTPS', 'GitHub'],
    details: [
      'Monorepo',
      'Frontend Angular',
      'API REST',
      'Roles Admin / Editor',
      'Scripts SQL',
      'Swagger',
      'Despliegue con SSL',
      'Infraestructura Linux'
    ],
    status: 'Desplegado / En mejora continua',
    screenshots: [
      'assets/images/projects/geourp.png',
      'assets/images/projects/geourp-2.png'
    ],
    actions: [
      {
        label: 'Código',
        href: 'https://github.com/MZubiri/geo-urp/tree/monorepo/bootstrap',
        available: true,
        statusText: 'Público',
        ariaLabel: 'Abrir repositorio público de GeoURP en GitHub'
      },
      {
        label: 'Ver detalle',
        href: '#',
        available: false,
        statusText: 'Próximamente',
        ariaLabel: 'Detalle de GeoURP próximamente'
      }
    ],
    featured: false
  }
];

export const contactLinksData: readonly ContactLinkModel[] = [
  {
    label: 'Correo',
    href: 'mailto:Molinaz.dev@gmail.com',
    available: true,
    ariaLabel: 'Enviar correo a Molinaz.dev@gmail.com'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/carlosmolinamxpe/',
    available: true,
    ariaLabel: 'Abrir LinkedIn de Carlos Molina'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/MZubiri',
    available: true,
    ariaLabel: 'Abrir GitHub de Carlos Molina'
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/51934772764',
    available: true,
    ariaLabel: 'Enviar mensaje por WhatsApp a Carlos Molina'
  }
];
