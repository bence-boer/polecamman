import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomePage} from "./home/home.page";
import {BrowserModule} from "@angular/platform-browser";
import {NotFoundPage} from "./pages/not-found/not-found.page";
import {AboutMePage} from "./pages/about-me/about-me.page";

const routes: Routes = [
  {
    path: '',
    title: $localize`Polecamman | Professional Polecam Videographer`,
    component: HomePage,
    data: {animation: 'HomePage'},
    pathMatch: 'full'
  },
  {
    path: 'blog',
    title: $localize`Blog | Polecamman`,
    data: {animation: 'BlogPage'},
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'gallery',
    title: $localize`Gallery | Polecamman`,
    data: {animation: 'GalleryPage'},
    loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'gear',
    title: $localize`Gear | Polecamman`,
    data: {animation: 'GearPage'},
    loadChildren: () => import('./gear/gear.module').then(m => m.GearModule)
  },
  {
    path: 'about-me',
    title: $localize`About Me | Polecamman`,
    data: {animation: 'AboutMePage'},
    component: AboutMePage
  },
  {
    path: '404',
    title: $localize`404 | Not Found`,
    data: {animation: 'NotFoundPage'},
    component: NotFoundPage
  },
  {
    path: '**',
    title: $localize`404 | Not Found`,
    data: {animation: 'NotFoundPage'},
    component: NotFoundPage
  }
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes, {
        scrollPositionRestoration: 'enabled',
        scrollOffset: [0, 0],
        anchorScrolling: 'enabled',
        urlUpdateStrategy: 'eager',
        preloadingStrategy: 'preloadAllModules'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
