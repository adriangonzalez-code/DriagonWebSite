import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ScrollAnimateDirective } from './shared/scroll-animate.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroComponent } from './pages/hero/hero.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    ScrollAnimateDirective,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
