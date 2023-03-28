import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumPreviewComponent } from "./ui/album-preview/album-preview.component";
import { AlbumComponent } from "./feature/album/album.component";
import { GalleryRoutingModule } from "./gallery-routing.module";
import { GalleryPage } from "./gallery.page";
import { SharedModule } from "../shared/shared.module";
import { PopoverDirective } from "../shared/utils/popover.directive";
import { SkeletonRectComponent } from "../shared/ui/skeleton-rect/skeleton-rect.component";
import { ScrollTrackerDirective } from "../shared/utils/scroll-tracker.directive";
import { CarouselComponent } from "../shared/ui/carousel/carousel.component";
import { MediaComponent } from "../shared/ui/media/media.component";
import { UiMediaLoaderDirective } from "../shared/utils/ui-media-loader.directive";

@NgModule({
  declarations: [
    GalleryPage,
    AlbumPreviewComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GalleryRoutingModule,
    PopoverDirective,
    SkeletonRectComponent,
    ScrollTrackerDirective,
    CarouselComponent,
    MediaComponent,
    UiMediaLoaderDirective
  ]
})
export class GalleryModule {}
