import { CookieBannerPluginListApiResponse } from "./cookie-banner-plugin-list.api.interface";

export interface CookieBannerApiResponse {
    Localization: string;
    CategoyId: number;
    CategoyHeading: string;
    IsMandatory: boolean;
    CategoyText: string;
    PluginList: CookieBannerPluginListApiResponse[];
    ExtraSettings: string;
}
