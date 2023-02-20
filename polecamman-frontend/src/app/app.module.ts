import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AboutMePage} from "./pages/about-me/about-me.page";
import {NotFoundPage} from "./pages/not-found/not-found.page";
import {ComingSoonPage} from "./pages/coming-soon/coming-soon.page";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./shared/utils/token.interceptor";
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {BlogModule} from "./blog/blog.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ComingSoonPage,
    NotFoundPage,
    AboutMePage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    BlogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
