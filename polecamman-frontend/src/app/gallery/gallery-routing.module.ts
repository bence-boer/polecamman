import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryPage } from './gallery.page';
import {AlbumComponent} from "./feature/album/album.component";


const routes: Routes = [
  {
    path: '',
    title: $localize`Gallery | Polecamman`,
    component: GalleryPage
  },
  {
    path: 'album/:slug',
    title: $localize`Gallery | Polecamman`,
    component: AlbumComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
