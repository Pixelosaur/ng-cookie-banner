import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class CookieBannerService {
  constructor(private http: HttpClient) {}

  getPrivacySettings(): Observable<any> {
    return this.http.get<any>(`${environment.serverUrl}/common/getBanner`).pipe(
      map((response: any) => {
        return response;
      }),
    );
  }
}
