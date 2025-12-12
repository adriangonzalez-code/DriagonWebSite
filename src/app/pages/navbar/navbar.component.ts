import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeSection: string = 'home';

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
