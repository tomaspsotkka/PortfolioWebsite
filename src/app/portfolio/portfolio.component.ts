import { ProjectsService } from './../_services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Tag } from '../_models/Tag';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ProjectCardComponent,
    CommonModule,
    CollapseModule,
    FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  
  projects = {} as Project[];

  isCollapsed: boolean = true;
  
  //Languages
  typescript: boolean = false;
  python: boolean = false;
  csharp: boolean = false;
  java: boolean = false;
  javascript: boolean = false;

  //Frameworks
  angular: boolean = false;
  react: boolean = false;
  nodejs: boolean = false;
  aspnet: boolean = false;

  filtering: boolean = false;

  constructor(private titleService: Title, private projectsService: ProjectsService){
      this.titleService.setTitle('Tomas Psotka - Portfolio');
    }
  ngOnInit(): void {
    this.projects = this.projectsService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if (this.csharp) {
      filterTags.push(Tag.CSHARP);
    }
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if (this.aspnet) {
      filterTags.push(Tag.ASPNET);
    }

    if (filterTags.length > 0){
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectsService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() {
    this.typescript = false;
    this.python = false;
    this.csharp = false;
    this.java = false;
    this.javascript = false;
    this.angular = false;
    this.react = false;
    this.nodejs = false;
    this.aspnet = false;

    this.filtering = false;

    this.projects = this.projectsService.GetProjects();
  }
}
