import { Project } from "../shared/models/project";

export const PROJECTS: Project[] = [
  {
    id: 'config-server',
    name: 'Config Server',
    description: 'Centralized configuration server with secure property management and dynamic refresh.',
    overview: `Robust backend & frontend solution for managing config properties and secrets across distributed apps. Features include scope-based access, secure encryption, REST API, UI, property history, and environment profile support. Built with Spring Boot 3, Angular 17, and PostgreSQL.`,
    technologies: [
      'Java 21', 'Spring Boot 3', 'Spring Cloud', 'Docker',
      'Angular 17', 'PostgreSQL', 'JWT', 'Maven'
    ],
    image: 'assets/projects/config-server-thumb.png',
    media: [
      'assets/projects/config-server/Driagon.png',
      'assets/projects/config-server/Logo Driagon 1.PNG',
      'assets/projects/config-server/Logo Driagon 2.PNG'
    ],
    github: 'https://github.com/adriangonzalez-code/ConfigServer',
    demo: ''
  }
];
