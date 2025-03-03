import { Component, Input } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Project } from '../_models/Project';
 
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
}
