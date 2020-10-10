import { Component } from '@angular/core';

@Component({
    selector: 'app-cookie-banner-settings',
    templateUrl: './cookie-banner-settings.component.html',
    styleUrls: ['./cookie-banner-settings.component.scss'],
})
export class CookieBannerSettingsComponent {
    isSettingsContentCollapsed: boolean = true;

    constructor() {}
}
