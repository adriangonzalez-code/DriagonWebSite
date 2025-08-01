import { Project } from "../shared/models/project";

export const PROJECTS: Project[] = [
  {
    id: 'config-server',
    name: 'Config Server',
    description: 'This is a complete configuration management ecosystem, engineered to replace the complexities of traditional Git-based setups. It provides a faster, more secure, and developer-centric experience for microservice environments.',
    overview: `This project introduces a complete configuration management ecosystem, engineered to replace the complexities of traditional Git-based setups and deliver a fundamentally superior experience. It provides a faster, more secure, and developer-centric solution for microservice environments, moving far beyond the capabilities of standard tools like Spring Cloud Config.
The core of the system is a powerful backend built with Spring Boot and PostgreSQL, establishing a robust, database-driven source of truth for all application properties. This design enables critical enterprise features like transactional control and full audit trails for every change. Paired with an intuitive Angular UI, it completely eliminates error-prone manual \`.yaml\` file editing, allowing for seamless visual management of configurations. A lightweight client driver completes the ecosystem, integrating transparently into your services to securely fetch the correct properties at startup, all protected by JWT security.
This is more than a replacement; it's a strategic upgrade that brings visual management, enhanced security, and operational agility to the forefront of your architecture.`,
    technologies: [
      'Java 21', 'Spring Boot 3', 'Spring Cloud', 'Docker',
      'Angular 17', 'PostgreSQL', 'JWT', 'Maven'
    ],
    image: 'assets/projects/config-server-thumb.png',
    media: [
      'assets/projects/config-server/login.png',
      'assets/projects/config-server/home.png',
      'assets/projects/config-server/scope.png',
      'assets/projects/config-server/scope properties.png',
      'assets/projects/config-server/scope secrets.png',
      'assets/projects/config-server/scope settings.png',
      'assets/projects/config-server/scope users.png',
      'assets/projects/config-server/properties loaded from another api.png'
    ],
    github: 'https://github.com/adriangonzalez-code/ConfigServer',
    demo: ''
  }
];
