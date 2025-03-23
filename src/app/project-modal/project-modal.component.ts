import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';
import { CarouselComponent, SlideComponent } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-project-modal',
  imports: [CommonModule, CarouselComponent, SlideComponent],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  project = {} as Project;

  constructor(public bsModalRef: BsModalRef){

  }
}
