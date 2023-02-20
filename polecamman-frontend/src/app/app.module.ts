import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HamburgerMenuComponent} from "./shared/feature/hamburger-menu/hamburger-menu.component";
import {GearComponent} from "./pages/gear/gear.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {NavbarItemComponent} from "./components/navbar/navbar-item/navbar-item.component";
import {AboutMeComponent} from "./pages/about-me/about-me.component";
import {ContactsComponent} from "./components/navbar/contacts/contacts.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {ComingSoonComponent} from "./pages/coming-soon/coming-soon.component";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./services/token.interceptor";
import {SharedModule} from './shared/shared.module';
import { HomeModule } from './home/home.module';
import {BlogModule} from "./blog/blog.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    FooterComponent,
    GearComponent,
    HamburgerMenuComponent,
    ContactsComponent,
    ComingSoonComponent,
    NotFoundComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
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
