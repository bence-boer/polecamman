import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarItemComponent } from './components/navbar/navbar-item/navbar-item.component';
import { BlogPostPreviewComponent } from './components/blog-post-preview/blog-post-preview.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './components/pages/landing/landing.component';
import { GearComponent } from './components/pages/gear/gear.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { AlbumPreviewComponent } from './components/album-preview/album-preview.component';
import { ContactsComponent } from './components/contacts/contacts.component';
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
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
