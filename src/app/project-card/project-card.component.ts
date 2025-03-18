import { Component, Input } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
 
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService){

  }

  OpenProjectModal() {
const modalOptions: ModalOptions = {
  class: "modal-lg"
};

    this.bsModalRef = this.modalService.show(ProjectModalComponent);
  
  }
}
