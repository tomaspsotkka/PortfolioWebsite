import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
      {id: 0, name: "Simple Chat Room", pictures: ["../../assets/images/1.png", "../../assets/images/2.png", "../../assets/images/3.png"], projectLink: "https://github.com/tomaspsotkka/ChatSystem", summary: "Java chat room with connetion based on sockets.",
        description: "In this project I have implemented some basic knowledge about sockets. The connection is based on sockets.",
        tags: [Tag.JAVA]},
  
      {id: 1, name: "Sample Angular App", pictures: ["../../assets/images/1.png", "../../assets/images/2.png", "../../assets/images/3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using Angular and Node.JS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]},
  
      {id: 2, name: "Sample .Net App", pictures: ["../../assets/images/1.png", "../../assets/images/2.png", "../../assets/images/3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using React and ASP.NET",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: [Tag.REACT ,Tag.CSHARP, Tag.ASPNET]},
  
      {id: 3, name: "Web API Project", pictures: ["../../assets/images/1.png", "../../assets/images/2.png", "../../assets/images/3.png"], projectLink: "//www.github.com", summary: "Web API Project that was developed for a class project.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: [Tag.CSHARP, Tag.ASPNET]},
  
      {id: 4, name: "Chrome Extension", pictures: ["../../assets/images/1.png", "../../assets/images/2.png", "../../assets/images/3.png"], projectLink: "//www.github.com", summary: "Developed a chrome extension that tracks the prices of furniture.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: [Tag.JAVASCRIPT]},
  
      {id: 5, name: "Mobile App", pictures: ["../../assets/images/1.png", "../../assets/images/2.png", "../../assets/images/3.png"], projectLink: "//www.github.com", summary: "Mobile app developed in java that tracks the departure and arrival of trains.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: [Tag.JAVA]}
    ];
  constructor() {}

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
