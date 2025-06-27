export interface Project {
  id: string;
  name: string;
  description: string;
  overview: string;
  technologies: string[];
  image?: string;
  media?: string[];
  github?: string;
  demo?: string;
}
