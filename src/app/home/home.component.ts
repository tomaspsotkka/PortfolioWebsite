import { ProjectsService } from './../_services/projects.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Project } from '../_models/Project';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredProject = {} as Project;

  constructor(private titleService: Title, private projectsService: ProjectsService){
    this.titleService.setTitle('Tomas Psotka - Home');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectsService.GetProjectById(0);
  }
}
