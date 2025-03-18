import { ProjectsService } from './../_services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  
  projects = {} as Project[];

  constructor(private titleService: Title, private projectsService: ProjectsService){
      this.titleService.setTitle('Tomas Psotka - Portfolio');
    }
  ngOnInit(): void {
    this.projects = this.projectsService.GetProjects();
  }
}
