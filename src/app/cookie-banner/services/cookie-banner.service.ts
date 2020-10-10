import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

import { CookieBanner } from '../interfaces/cookie-banner.interface';
import { CookieBannerEnvelopeApiResponse } from '../interfaces/api/cookie-banner-envelope.api.interface';
import { CookieBannerApiResponse } from '../interfaces/api/cookie-banner.api.interface';

import { CookieBannerParser } from '../parsers/cookie-banner.parser';

@Injectable({
    providedIn: 'root',
})
export class CookieBannerService {
    constructor(private http: HttpClient, private cookieBannerParser: CookieBannerParser) {}

    getPrivacySettings(): Observable<CookieBanner[]> {
        return this.http.get<any>(`${environment.serverUrl}/common/getBanner`).pipe(
            map(
                (response: CookieBannerEnvelopeApiResponse<CookieBannerApiResponse[]>) =>
                    response.accordian,
            ),
            map((cookieBanners: CookieBannerApiResponse[]) => {
                return cookieBanners.map((banner: CookieBannerApiResponse) =>
                    this.cookieBannerParser.parseCookieBanner(banner),
                );
            }),
        );
    }
}
