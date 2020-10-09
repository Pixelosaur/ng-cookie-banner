import { Component, OnInit } from '@angular/core';
import { CookieBannerService } from './services/cookie-banner.service';

@Component({
    selector: 'app-cookie-banner',
    templateUrl: './cookie-banner.component.html',
})
export class CookieBannerComponent implements OnInit {
    bannerSettings: any = [];

    constructor(private cookieBannerService: CookieBannerService) {}

    ngOnInit(): void {
        this.getBannerSettings();
    }

    getBannerSettings(): void {
        this.cookieBannerService.getPrivacySettings().subscribe((settings) => {
            this.bannerSettings = settings.accordian;

            console.log(this.bannerSettings);
        });
    }
}
