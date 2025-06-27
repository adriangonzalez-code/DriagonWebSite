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
  },
  {
    id: 'ecommerce-app',
    name: 'E-Commerce Platform',
    description: 'Monolithic shopping cart app with fullstack architecture using React and Spring Boot 2.',
    overview: `This project is a classic shopping cart system featuring user authentication, product browsing, and order management. Built as a monolith with a responsive React frontend and a Spring Boot 2 backend, the app is containerized with Docker and deployable on Kubernetes. MySQL is used for persistent storage, and JWT is implemented for secure authentication.`,
    technologies: [
      'React', 'Spring Boot 2', 'Docker', 'Kubernetes', 'MySQL', 'JWT', 'Maven'
    ],
    image: 'assets/projects/ecommerce-thumb.png',
    media: [
      'assets/projects/ecommerce-home.png',
      'assets/projects/ecommerce-cart.png',
      'assets/projects/ecommerce-db.png'
    ],
    github: 'https://github.com/adriangonzalez-code/ecommerce-app',
    demo: ''
  },
  {
    id: 'exam-microservices',
    name: 'Online Exam System',
    description: 'Microservice-based platform for online exams using Angular and Spring Cloud.',
    overview: `A robust microservice architecture for online testing, including services for users, students, exams, questions, responses, and course management. The system features an API Gateway, Eureka service registry, and resilience patterns using Resilience4j and Circuit Breaker. Each service is containerized with Docker and orchestrated with Kubernetes. Angular serves as the frontend client. Designed with scalability, fault tolerance, and domain separation in mind.`,
    technologies: [
      'Angular', 'Spring Boot 2', 'Spring Cloud', 'MySQL',
      'Eureka', 'API Gateway', 'Resilience4j', 'Docker', 'Kubernetes'
    ],
    image: 'assets/projects/exam-thumb.png',
    media: [
      'assets/projects/exam-dashboard.png',
      'assets/projects/exam-architecture.png',
      'assets/projects/exam-gateway.png'
    ],
    github: 'https://github.com/adriangonzalez-code/exam-microservices',
    demo: ''
  },
  {
    id: 'finance-tracker',
    name: 'Finance Tracker App',
    description: 'Track personal expenses with visual charts, budget alerts and secure login.',
    overview: `A single-page application that allows users to register, categorize, and track their daily expenses. Includes monthly budget alerts and pie/donut chart visualizations using Chart.js. React handles the frontend while Node.js and Express power the API, with MongoDB for persistence. JWT-based authentication and password hashing ensure secure sessions.`,
    technologies: [
      'React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Chart.js', 'Docker'
    ],
    image: 'assets/projects/finance-thumb.png',
    media: [
      'assets/projects/finance-dashboard.png',
      'assets/projects/finance-charts.png',
      'assets/projects/finance-categories.png'
    ],
    github: 'https://github.com/adriangonzalez-code/finance-tracker',
    demo: ''
  },
  {
    id: 'dev-portfolio-gen',
    name: 'DevPortfolio Generator',
    description: 'Generate elegant, responsive developer portfolios with a customizable Angular UI.',
    overview: `An Angular-based web app designed to generate developer portfolios in minutes. Users can select layouts, colors, font styles, and tech stacks, preview live changes, and export the full HTML/CSS bundle. Features form validation, local storage persistence, Tailwind integration and animations via Animate.css. No backend required.`,
    technologies: [
      'Angular', 'Tailwind CSS', 'Animate.css', 'RxJS', 'TypeScript'
    ],
    image: 'assets/projects/portfolio-thumb.png',
    media: [
      'assets/projects/portfolio-layout.png',
      'assets/projects/portfolio-builder.png'
    ],
    github: 'https://github.com/adriangonzalez-code/dev-portfolio-generator',
    demo: ''
  }

];
