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
  isZoomed = false;

  /**
   * Navega a una URL en una nueva pestaña.
   */
  navigateTo(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank');
    }
  }

  // --- Lógica del Zoom Mejorada ---

  /**
   * Activa o desactiva el zoom. Al activar, usa la posición del evento
   * para establecer el punto de origen del zoom.
   */
  toggleZoom(event: MouseEvent | TouchEvent) {
    this.isZoomed = !this.isZoomed;

    if (this.isZoomed) {
      // Al hacer zoom, establece el origen inicial.
      this.updateZoomOrigin(event);
    } else {
      // Al quitar el zoom, limpia el estilo para evitar que se quede "pegado".
      const img = (event.currentTarget as HTMLElement)?.querySelector('img');
      if (img) {
        img.style.transformOrigin = '';
      }
    }
  }

  /**
   * Actualiza la posición de la "lupa" en el evento de movimiento del ratón.
   */
  onMouseMove(event: MouseEvent) {
    if (!this.isZoomed) return;
    this.updateZoomOrigin(event);
  }

  /**
   * Actualiza la posición de la "lupa" en el evento de arrastre táctil.
   */
  onTouchMove(event: TouchEvent) {
    if (!this.isZoomed) return;
    event.preventDefault(); // Previene el scroll de la página mientras se arrastra.
    this.updateZoomOrigin(event);
  }

  /**
   * Calcula y aplica el 'transform-origin' a la imagen para el efecto de lupa.
   * Funciona tanto para eventos de ratón como táctiles.
   */
  private updateZoomOrigin(event: MouseEvent | TouchEvent) {
    const container = event.currentTarget as HTMLElement;
    const img = container.querySelector('img');
    if (!img) return;

    const rect = container.getBoundingClientRect();
    let clientX: number, clientY: number;

    // Obtiene las coordenadas correctas dependiendo del tipo de evento.
    if (event instanceof MouseEvent) {
      clientX = event.clientX;
      clientY = event.clientY;
    } else {
      // Asegurarse de que hay un punto de contacto.
      if (event.touches.length === 0) return;
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    }

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    img.style.transformOrigin = `${x}% ${y}%`;
  }

  // --- Fin de la lógica del Zoom ---


  openModal(project: Project) {
    this.selectedProject = project;
    this.currentSlide = 0;
    this.opening = true;
    this.closing = false;
    this.isZoomed = false; // Asegura que el zoom esté reseteado al abrir.
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
}
