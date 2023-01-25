import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./pages/landing/landing.component";
import {BrowserModule} from "@angular/platform-browser";
import {GalleryComponent} from "./pages/gallery/gallery.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {GearComponent} from "./pages/gear/gear.component";
import {BlogPostComponent} from "./pages/blog-post/blog-post.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {AlbumComponent} from "./pages/album/album.component";
import {AboutMeComponent} from "./pages/about-me/about-me.component";

const routes: Routes = [
  {
    path: '',
    title: 'Polecamman | Professional Polecam Videographer',
    component: LandingComponent
  },
  {
    path: 'blog',
    title: 'Blog | Polecamman',
    component: BlogComponent,
    /*children: [
      {
        path: 'list',
        component: BlogPostComponent
      }
    ]*/
  },
  {
    path: 'blog/blog-post/:slug',
    title: 'Blog | Polecamman',
    component: BlogPostComponent,
  },
  {
    path: 'gallery',
    title: 'Gallery | Polecamman',
    component: GalleryComponent
  },
  {
    path: 'gallery/album/:slug',
    title: 'Gallery | Polecamman',
    component: AlbumComponent
  },
  {
    path: 'gear',
    title: 'Gear | Polecamman',
    component: GearComponent
  },
  {
    path: 'about-me',
    title: 'About Me | Polecamman',
    component: AboutMeComponent
  },
  {
    path: '**',
    title: '404 | Page Not Found',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
