import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./components/pages/landing/landing.component";
import {BrowserModule} from "@angular/platform-browser";
import {GalleryComponent} from "./components/pages/gallery/gallery.component";
import {BlogComponent} from "./components/pages/blog/blog.component";
import {GearComponent} from "./components/pages/gear/gear.component";
import {BlogPostOpenComponent} from "./components/blog-post-open/blog-post-open.component";
import {PageNotFoundComponent} from "./components/pages/page-not-found/page-not-found.component";
import {AlbumOpenComponent} from "./components/album-open/album-open.component";

const routes: Routes = [
  {
    path: '',
    title: 'Welcome!',
    component: LandingComponent
  },
  {
    path: 'blog',
    title: 'Blog',
    component: BlogComponent,
    /*children: [
      {
        path: 'list',
        component: BlogPostOpenComponent
      }
    ]*/
  },
  {
    path: 'blog/blog-post/:id',
    title: 'Blog',
    component: BlogPostOpenComponent,
  },
  {
    path: 'gallery',
    title: 'Gallery',
    component: GalleryComponent
  },
  {
    path: 'gallery/album/:id',
    title: 'Gallery',
    component: AlbumOpenComponent
  },
  {
    path: 'gear',
    title: 'Gear',
    component: GearComponent
  },
  {
    path: '**',
    title: 'Page not found',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
