import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    // TODO: Add proper type
    @Input() content: any;

    isCollapsed: boolean = true;

    constructor(public activeModal: NgbActiveModal) {}
}
