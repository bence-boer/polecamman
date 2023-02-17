import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./pages/landing/landing.component";
import {BrowserModule} from "@angular/platform-browser";
import {GalleryComponent} from "./pages/gallery/gallery.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {GearComponent} from "./pages/gear/gear.component";
import {BlogPostComponent} from "./pages/blog-post/blog-post.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {AlbumComponent} from "./pages/album/album.component";
import {AboutMeComponent} from "./pages/about-me/about-me.component";

const routes: Routes = [
  {
    path: '',
    title: $localize`Polecamman | Professional Polecam Videographer`,
    component: LandingComponent
  },
  {
    path: 'blog',
    title: $localize`Blog | Polecamman`,
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
    title: $localize`Blog | Polecamman`,
    component: BlogPostComponent,
  },
  {
    path: 'gallery',
    title: $localize`Gallery | Polecamman`,
    component: GalleryComponent
  },
  {
    path: 'gallery/album/:slug',
    title: $localize`Gallery | Polecamman`,
    component: AlbumComponent
  },
  {
    path: 'gear',
    title: $localize`Gear | Polecamman`,
    component: GearComponent
  },
  {
    path: 'about-me',
    title: $localize`About Me | Polecamman`,
    component: AboutMeComponent
  },
  {
    path: '404',
    title: $localize`404 | Not Found`,
    component: NotFoundComponent
  },
  {
    path: '**',
    title: $localize`404 | Not Found`,
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
