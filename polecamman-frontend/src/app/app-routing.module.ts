import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./components/pages/landing/landing.component";
import {BrowserModule} from "@angular/platform-browser";
import {GalleryComponent} from "./components/pages/gallery/gallery.component";
import {BlogComponent} from "./components/pages/blog/blog.component";
import {GearComponent} from "./components/pages/gear/gear.component";
import {BlogPostComponent} from "./components/pages/blog-post/blog-post.component";
import {PageNotFoundComponent} from "./components/pages/page-not-found/page-not-found.component";
import {AlbumComponent} from "./components/pages/album/album.component";
import {AboutMeComponent} from "./components/pages/about-me/about-me.component";

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
    path: 'blog/blog-post/:id',
    title: 'Blog | Polecamman',
    component: BlogPostComponent,
  },
  {
    path: 'gallery',
    title: 'Gallery | Polecamman',
    component: GalleryComponent
  },
  {
    path: 'gallery/album/:id',
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
