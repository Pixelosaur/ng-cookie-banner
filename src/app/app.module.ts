import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieBannerParser } from './cookie-banner/parsers/cookie-banner.parser';
import { NgbAlertModule, NgbCollapseModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './cookie-banner/components/modal/modal.component';

@NgModule({
    declarations: [AppComponent, CookieBannerComponent, ModalComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbAlertModule,
        NgbModalModule,
        NgbCollapseModule,
    ],
    providers: [CookieBannerParser],
    bootstrap: [AppComponent],
})
export class AppModule {}
