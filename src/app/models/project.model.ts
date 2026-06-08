export interface ProjectModel {
  name: string;
  summary: string;
  problem: string;
  built: string;
  technologies: readonly string[];
  details: readonly string[];
  status: string;
  screenshots?: readonly string[];
  actions: readonly ProjectActionModel[];
  featured: boolean;
  note?: string;
}

export interface ProjectActionModel {
  label: string;
  href: string;
  available: boolean;
  statusText: string;
  ariaLabel: string;
}