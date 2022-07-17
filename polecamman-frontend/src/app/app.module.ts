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
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { AlbumOpenComponent } from './components/album-open/album-open.component';
import { BlogPostOpenComponent } from './components/blog-post-open/blog-post-open.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
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
