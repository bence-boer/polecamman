import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./components/pages/landing/landing.component";
import {BrowserModule} from "@angular/platform-browser";
import {GalleryComponent} from "./components/pages/gallery/gallery.component";
import {BlogComponent} from "./components/pages/blog/blog.component";
import {GearComponent} from "./components/pages/gear/gear.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'gear',
    component: GearComponent
  }
]

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
