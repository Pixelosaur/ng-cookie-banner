import { CookieBannerPluginList } from './cookie-banner-plugin-list.interface';

export interface CookieBanner {
    categoryId: number;
    categoryHeading: string;
    isMandatory: boolean;
    categoryText: string;
    pluginList: CookieBannerPluginList[];
    extraSettings: string;
}
