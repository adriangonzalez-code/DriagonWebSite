import { Component } from '@angular/core';
import { PROJECTS } from '../../data/project-list';
import { Project } from "../../shared/models/project";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

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
  faExternalLink = faArrowUpRightFromSquare;

  // --- Lógica para el Zoom ---
  isZoomed = false;

  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isZoomed) return;
    const target = event.currentTarget as HTMLElement;
    const img = target.querySelector('img');
    if (!img) return;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
  }
  // --- Fin de la lógica para el Zoom ---

  openModal(project: Project) {
    this.selectedProject = project;
    this.currentSlide = 0;
    this.opening = true;
    this.closing = false;
    this.isZoomed = false;
  }

  closeModal() {
    this.closing = true;
    this.opening = false;
    setTimeout(() => {
      this.selectedProject = null;
      this.closing = false;
    }, 400);
  }

  nextSlide() {
    if (this.selectedProject && this.selectedProject.media) {
      this.isZoomed = false;
      this.currentSlide = (this.currentSlide + 1) % this.selectedProject.media.length;
    }
  }

  prevSlide() {
    if (this.selectedProject && this.selectedProject.media) {
      this.isZoomed = false;
      this.currentSlide = (this.currentSlide - 1 + this.selectedProject.media.length) % this.selectedProject.media.length;
    }
  }

  // --- Nueva función para navegación ---
  navigateTo(url: string | undefined): void {
    // Asegúrate de que la URL existe antes de intentar abrirla
    if (url) {
      window.open(url, '_blank');
    }
  }
}
