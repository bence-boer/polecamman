import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomePage} from "./home/home.page";
import {BrowserModule} from "@angular/platform-browser";
import {NotFoundPage} from "./pages/not-found/not-found.page";
import {AboutMePage} from "./pages/about-me/about-me.page";
import {ComingSoonPage} from "./pages/coming-soon/coming-soon.page";

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
    component: ComingSoonPage
    //loadChildren: () => import('./gear/gear.module').then(m => m.GearModule)
  },
  {
    path: 'about-me',
    title: $localize`About Me | Polecamman`,
    component: AboutMePage
  },
  {
    path: '404',
    title: $localize`404 | Not Found`,
    component: NotFoundPage
  },
  {
    path: '**',
    title: $localize`404 | Not Found`,
    component: NotFoundPage
  }
]

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
