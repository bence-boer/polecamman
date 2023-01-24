import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HamburgerMenuComponent} from "./components/hamburger-menu/hamburger-menu.component";
import {GearComponent} from "./pages/gear/gear.component";
import {AlbumPreviewComponent} from "./components/album-preview/album-preview.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {BlogPostPreviewComponent} from "./components/blog-post-preview/blog-post-preview.component";
import {NavbarItemComponent} from "./components/navbar/navbar-item/navbar-item.component";
import {BlogPostComponent} from "./pages/blog-post/blog-post.component";
import {AboutMeComponent} from "./pages/about-me/about-me.component";
import {AlbumComponent} from "./pages/album/album.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {LandingComponent} from "./pages/landing/landing.component";
import {GalleryComponent} from "./pages/gallery/gallery.component";
import {ComingSoonComponent} from "./pages/coming-soon/coming-soon.component";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./services/token.interceptor";
import { MediaViewerComponent } from './components/media-viewer/media-viewer.component';
import { LazyLoadImagesDirective } from './directives/lazy-load-images.directive';

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
    AlbumComponent,
    BlogPostComponent,
    PageNotFoundComponent,
    AboutMeComponent,
    MediaViewerComponent,
    LazyLoadImagesDirective,
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
