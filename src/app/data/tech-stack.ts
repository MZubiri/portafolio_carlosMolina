import { TechnologyCategory, TechnologyGroupModel, TechnologyModel } from '../models/technology.model';

export const techStackData: readonly TechnologyModel[] = [
  { name: 'Angular', icon: 'assets/tech/angular.svg', category: 'Frontend' },
  { name: 'TypeScript', icon: 'assets/tech/typescript.svg', category: 'Frontend' },
  { name: 'JavaScript', icon: 'assets/tech/javascript.svg', category: 'Frontend' },
  { name: 'React', icon: 'assets/tech/react.svg', category: 'Frontend' },
  { name: 'HTML5', icon: 'assets/tech/html5.svg', category: 'Frontend' },
  { name: 'SCSS / Sass', icon: 'assets/tech/scss.svg', category: 'Frontend' },
  { name: 'Razor', icon: 'assets/tech/razor.svg', category: 'Frontend' },
  { name: 'Bootstrap', icon: 'assets/tech/bootstrap.svg', category: 'Frontend' },

  { name: 'ASP.NET Core', icon: 'assets/tech/asp-net-core.svg', category: 'Backend' },
  { name: 'ASP.NET Core MVC', icon: 'assets/tech/asp-net-core-mvc.svg', category: 'Backend' },
  { name: 'C#', icon: 'assets/tech/csharp.svg', category: 'Backend' },
  { name: 'Spring Boot', icon: 'assets/tech/spring-boot.svg', category: 'Backend' },
  { name: 'Spring Security', icon: 'assets/tech/spring-security.svg', category: 'Backend' },
  { name: 'Java', icon: 'assets/tech/java.svg', category: 'Backend' },
  { name: 'Web API', icon: 'assets/tech/web-api.svg', category: 'Backend' },

  { name: 'SQL Server', icon: 'assets/tech/sql-server.svg', category: 'Bases de datos' },
  { name: 'MySQL', icon: 'assets/tech/mysql.svg', category: 'Bases de datos' },
  { name: 'MongoDB', icon: 'assets/tech/mongodb.svg', category: 'Bases de datos' },
  { name: 'PostgreSQL', icon: 'assets/tech/postgresql.svg', category: 'Bases de datos' },
  { name: 'Firebase', icon: 'assets/tech/firebase.svg', category: 'Bases de datos' },

  { name: 'Linux VPS', icon: 'assets/tech/linux-vps.svg', category: 'DevOps' },
  { name: 'Docker', icon: 'assets/tech/docker.svg', category: 'DevOps' },
  { name: 'Nginx', icon: 'assets/tech/nginx.svg', category: 'DevOps' },
  { name: 'VPS', icon: 'assets/tech/vps.svg', category: 'DevOps' },
  { name: 'SSL / HTTPS', icon: 'assets/tech/ssl-https.svg', category: 'DevOps' },

  { name: 'Selenium', icon: 'assets/tech/selenium.svg', category: 'Testing' },
  { name: 'Appium', icon: 'assets/tech/appium.svg', category: 'Testing' },
  { name: 'JMeter', icon: 'assets/tech/jmeter.svg', category: 'Testing' },
  { name: 'Serenity BDD', icon: 'assets/tech/serenity-bdd.svg', category: 'Testing' },
  { name: 'Cucumber', icon: 'assets/tech/cucumber.svg', category: 'Testing' },

  { name: 'Git', icon: 'assets/tech/git.svg', category: 'Herramientas' },
  { name: 'GitHub', icon: 'assets/tech/github.svg', category: 'Herramientas' },
  { name: 'Postman', icon: 'assets/tech/postman.svg', category: 'Herramientas' },
  { name: 'Maven', icon: 'assets/tech/maven.svg', category: 'Herramientas' },

  { name: 'REST APIs', icon: 'assets/tech/rest-apis.svg', category: 'Seguridad/API' },
  { name: 'JWT Authentication', icon: 'assets/tech/jwt-authentication.svg', category: 'Seguridad/API' },
  { name: 'JWT', icon: 'assets/tech/jwt.svg', category: 'Seguridad/API' }
] as const;

const categoryOrder: readonly TechnologyCategory[] = [
  'Frontend',
  'Backend',
  'Bases de datos',
  'DevOps',
  'Testing',
  'Herramientas',
  'Seguridad/API'
] as const;

export const technologyGroupsData: readonly TechnologyGroupModel[] = categoryOrder.map((category) => ({
  category,
  items: techStackData.filter((technology) => technology.category === category)
}));

export const technologyIconMap: Readonly<Record<string, string>> = techStackData.reduce<Record<string, string>>(
  (icons, technology) => {
    icons[normalizeTechnologyName(technology.name)] = technology.icon;
    return icons;
  },
  {}
);

export function normalizeTechnologyName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9#+]+/g, ' ').trim();
}
