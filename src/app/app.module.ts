import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieBannerParser } from './cookie-banner/parsers/cookie-banner.parser';

@NgModule({
    declarations: [AppComponent, CookieBannerComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [CookieBannerParser],
    bootstrap: [AppComponent],
})
export class AppModule {}
