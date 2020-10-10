import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';

const routes: Routes = [{ path: '', component: CookieBannerComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
