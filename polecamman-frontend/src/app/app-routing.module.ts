import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomePage} from "./home/home.page";
import {BrowserModule} from "@angular/platform-browser";
import {GearComponent} from "./pages/gear/gear.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {AboutMeComponent} from "./pages/about-me/about-me.component";

const routes: Routes = [
  {
    path: '',
    title: $localize`Polecamman | Professional Polecam Videographer`,
    component: HomePage,
    pathMatch: 'full'
  },
  {
    path: 'blog',
    title: $localize`Blog | Polecamman`,
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'gallery',
    title: $localize`Gallery | Polecamman`,
    loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)
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
