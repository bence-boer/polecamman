import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HamburgerMenuComponent} from "./shared/feature/hamburger-menu/hamburger-menu.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {NavbarItemComponent} from "./components/navbar/navbar-item/navbar-item.component";
import {AboutMePage} from "./pages/about-me/about-me.page";
import {ContactsComponent} from "./components/navbar/contacts/contacts.component";
import {NotFoundPage} from "./pages/not-found/not-found.page";
import {ComingSoonPage} from "./pages/coming-soon/coming-soon.page";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./services/token.interceptor";
import {SharedModule} from './shared/shared.module';
import { HomeModule } from './home/home.module';
import {BlogModule} from "./blog/blog.module";
import { GearModule } from './gear/gear.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    FooterComponent,
    HamburgerMenuComponent,
    ContactsComponent,
    ComingSoonPage,
    NotFoundPage,
    AboutMePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    BlogModule,
    GearModule
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
