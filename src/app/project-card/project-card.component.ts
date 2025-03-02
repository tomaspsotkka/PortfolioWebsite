import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() projectName: string = "";
}
