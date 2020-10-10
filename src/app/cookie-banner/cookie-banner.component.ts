import { Component, OnInit } from '@angular/core';
import { CookieBannerService } from './services/cookie-banner.service';
import { CookieBanner } from './interfaces/cookie-banner.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';

@Component({
    selector: 'app-cookie-banner',
    templateUrl: './cookie-banner.component.html',
    styleUrls: ['./cookie-banner.component.scss'],
})
export class CookieBannerComponent implements OnInit {
    bannerSettings: CookieBanner[] = [];

    constructor(private cookieBannerService: CookieBannerService, private modalService: NgbModal) {}

    ngOnInit(): void {
        this.getBannerSettings();
    }

    getBannerSettings(): void {
        this.cookieBannerService.getPrivacySettings().subscribe((settings: CookieBanner[]) => {
            this.bannerSettings = settings;
        });
    }

    open() {
        const modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
        modalRef.componentInstance.name = 'World';
    }
}
