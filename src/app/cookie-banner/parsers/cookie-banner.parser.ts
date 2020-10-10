import { Injectable } from '@angular/core';
import { CookieBanner } from '../interfaces/cookie-banner.interface';
import { CookieBannerApiResponse } from '../interfaces/api/cookie-banner.api.interface';
import { CookieBannerPluginList } from '../interfaces/cookie-banner-plugin-list.interface';
import { CookieBannerPluginListApiResponse } from '../interfaces/api/cookie-banner-plugin-list.api.interface';

@Injectable()
export class CookieBannerParser {
    constructor() {}

    parseCookieBanner(banner: CookieBannerApiResponse): CookieBanner {
        const pluginList: CookieBannerPluginList[] = banner.PluginList.map(
            (plugin: CookieBannerPluginListApiResponse) => this.parseBannerPluginList(plugin),
        );
        return {
            categoryId: banner.CategoyId ? banner.CategoyId : null,
            categoryHeading: banner.CategoyHeading ? banner.CategoyHeading : null,
            isMandatory: banner.IsMandatory ? banner.IsMandatory : false,
            categoryText: banner.CategoyText ? banner.CategoyText : null,
            pluginList: pluginList ? pluginList : [],
            extraSettings: banner.ExtraSettings ? banner.ExtraSettings : null,
        };
    }

    parseBannerPluginList(pluginList: CookieBannerPluginListApiResponse): CookieBannerPluginList {
        return {
            complianceType: pluginList.ComplianceType ? pluginList.ComplianceType : null,
            complianceTypeID: pluginList.ComplianceTypeID ? pluginList.ComplianceTypeID : null,
            blockingEnabled: pluginList.BlockingEnabled ? pluginList.BlockingEnabled : false,
            pluginDomain: pluginList.PluginDomain ? pluginList.PluginDomain : null,
            cName: pluginList.cName ? pluginList.cName : null,
            optOutExternalLink: pluginList.optOutExternalLink
                ? pluginList.optOutExternalLink
                : null,
        };
    }
}
