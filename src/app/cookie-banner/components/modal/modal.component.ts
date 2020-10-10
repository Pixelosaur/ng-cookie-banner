import { Component, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  // TODO: Add proper type
  @Input() content: any;

  constructor(public activeModal: NgbActiveModal) {}
}
