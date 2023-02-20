import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MediaViewerComponent} from "./ui/media-viewer/media-viewer.component";
import {SkeletonRectComponent} from "./ui/skeleton-rect/skeleton-rect.component";
import {TooltipComponent} from "./ui/tooltip/tooltip.component";
import {LazyLoadImagesDirective} from "./utils/lazy-load-images.directive";
import {ScrollTrackerDirective} from "./utils/scroll-tracker.directive";
import {UiMediaLoaderDirective} from "./utils/ui-media-loader.directive";
import {ImageCarouselComponent} from "./ui/image-carousel/image-carousel.component";
import {LocaleChangerComponent} from "./feature/locale-changer/locale-changer.component";

@NgModule({
  declarations: [
    MediaViewerComponent,
    SkeletonRectComponent,
    TooltipComponent,
    LazyLoadImagesDirective,
    ScrollTrackerDirective,
    UiMediaLoaderDirective,
    ImageCarouselComponent,
    LocaleChangerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MediaViewerComponent,
    SkeletonRectComponent,
    TooltipComponent,
    LazyLoadImagesDirective,
    ScrollTrackerDirective,
    UiMediaLoaderDirective,
    ImageCarouselComponent,
    LocaleChangerComponent
  ]
})
export class SharedModule {
}
