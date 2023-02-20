import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlbumPreviewComponent} from "./ui/album-preview/album-preview.component";
import {AlbumComponent} from "./feature/album/album.component";
import {GalleryRoutingModule} from "./gallery-routing.module";
import {GalleryPage} from "./gallery.page";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    GalleryPage,
    AlbumPreviewComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
