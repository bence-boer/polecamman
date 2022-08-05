import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HamburgerMenuComponent} from "./components/hamburger-menu/hamburger-menu.component";
import {GearComponent} from "./components/pages/gear/gear.component";
import {AlbumPreviewComponent} from "./components/album-preview/album-preview.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {BlogComponent} from "./components/pages/blog/blog.component";
import {BlogPostPreviewComponent} from "./components/blog-post-preview/blog-post-preview.component";
import {NavbarItemComponent} from "./components/navbar/navbar-item/navbar-item.component";
import {BlogPostOpenComponent} from "./components/pages/blog-post-open/blog-post-open.component";
import {AboutMeComponent} from "./components/pages/about-me/about-me.component";
import {AlbumOpenComponent} from "./components/pages/album-open/album-open.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {PageNotFoundComponent} from "./components/pages/page-not-found/page-not-found.component";
import {LandingComponent} from "./components/pages/landing/landing.component";
import {GalleryComponent} from "./components/pages/gallery/gallery.component";
import {ComingSoonComponent} from "./components/pages/coming-soon/coming-soon.component";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./services/token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    BlogPostPreviewComponent,
    FooterComponent,
    GalleryComponent,
    LandingComponent,
    GearComponent,
    BlogComponent,
    HamburgerMenuComponent,
    AlbumPreviewComponent,
    ContactsComponent,
    ComingSoonComponent,
    AlbumOpenComponent,
    BlogPostOpenComponent,
    PageNotFoundComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
