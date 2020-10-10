import { Component, OnInit } from '@angular/core';
import { CookieBannerService } from './services/cookie-banner.service';
import { CookieBanner } from './interfaces/cookie-banner.interface';

@Component({
    selector: 'app-cookie-banner',
    templateUrl: './cookie-banner.component.html',
})
export class CookieBannerComponent implements OnInit {
    bannerSettings: CookieBanner[] = [];

    constructor(private cookieBannerService: CookieBannerService) {}

    ngOnInit(): void {
        this.getBannerSettings();
    }

    getBannerSettings(): void {
        this.cookieBannerService.getPrivacySettings().subscribe((settings: CookieBanner[]) => {
            this.bannerSettings = settings;
        });
    }
}
