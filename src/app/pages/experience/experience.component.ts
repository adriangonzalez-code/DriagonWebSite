import { Component } from '@angular/core';
import { Experience } from '../../shared/models/experience';
import { EXPERIENCES } from '../../data/experiences-list';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: Experience[] = EXPERIENCES;
}
