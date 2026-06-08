export interface TechnologyModel {
  name: string;
  icon: string;
  category: TechnologyCategory;
}

export type TechnologyCategory =
  | 'Frontend'
  | 'Backend'
  | 'Bases de datos'
  | 'DevOps'
  | 'Testing'
  | 'Herramientas'
  | 'Seguridad/API';

export interface TechnologyGroupModel {
  category: TechnologyCategory;
  items: readonly TechnologyModel[];
}
