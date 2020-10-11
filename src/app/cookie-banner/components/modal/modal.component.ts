import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieBanner } from '../../interfaces/cookie-banner.interface';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    @Input() bannerSettings: CookieBanner[];

    isCollapsed: boolean = true;

    constructor(public activeModal: NgbActiveModal) {}
}
