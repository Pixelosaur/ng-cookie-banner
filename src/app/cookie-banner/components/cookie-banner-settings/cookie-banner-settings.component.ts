import { Component, Input, OnInit } from '@angular/core';
import { CookieBanner } from '../../interfaces/cookie-banner.interface';
import { CookieBannerPluginList } from '../../interfaces/cookie-banner-plugin-list.interface';

@Component({
    selector: 'app-cookie-banner-settings',
    templateUrl: './cookie-banner-settings.component.html',
    styleUrls: ['./cookie-banner-settings.component.scss'],
})
export class CookieBannerSettingsComponent implements OnInit {
    @Input() banner: CookieBanner;

    pluginList: CookieBannerPluginList[] = [];
    isSettingsContentCollapsed: boolean = true;

    constructor() {}

    ngOnInit(): void {
        this.pluginList = this.banner?.pluginList;
    }
}
