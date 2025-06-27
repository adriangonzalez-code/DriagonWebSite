import { Component } from '@angular/core';
import { faJava, faDochub, faDocker, faAws, faGit, faGitlab, faGithub, faHtml5, faCss3Alt, faJs, faAngular, faJenkins } from "@fortawesome/free-brands-svg-icons";
import {  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'driagon-site';
  faJava = faJava;
  faDochub = faDochub;
  faDocker = faDocker;
  faAws = faAws;
  faGit = faGit;
  faGitlab = faGitlab;
  faGithub = faGithub;
  faHtml5 = faHtml5;
  faCss3Alt = faCss3Alt;
  faJs = faJs;
  faAngular = faAngular;
  faJenkins = faJenkins;
  icons = [
    this.faJava,
    this.faGit,
    this.faGithub,
    this.faGitlab,
    this.faDocker,
    this.faDochub,
    this.faHtml5,
    this.faCss3Alt,
    this.faJs,
    this.faAngular,
    this.faJenkins,
    this.faAws
  ];
}
