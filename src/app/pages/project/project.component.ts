import { Component } from '@angular/core';
import { PROJECTS } from '../../data/project-list';
import { Project } from "../../shared/models/project";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects: Project[] = PROJECTS;
  selectedProject: Project | null = null;
  currentSlide = 0;
  opening = false;
  closing = false;
  faGithub = faGithub;

  openModal(project: Project) {
    this.selectedProject = project;
    this.currentSlide = 0;
    this.opening = true;
    this.closing = false;
  }

  closeModal() {
    this.closing = true;
    this.opening = false;
    setTimeout(() => {
      this.selectedProject = null;
      this.closing = false;
    }, 400); // Corresponde a la duración de la animación
  }

  nextSlide() {
    if (this.selectedProject && this.selectedProject.media) {
      this.currentSlide = (this.currentSlide + 1) % this.selectedProject.media.length;
    }
  }

  prevSlide() {
    if (this.selectedProject && this.selectedProject.media) {
      this.currentSlide = (this.currentSlide - 1 + this.selectedProject.media.length) % this.selectedProject.media.length;
    }
  }

  openInNewTab(url: string) {
    window.open(url, '_blank', 'noopener');
  }
}
