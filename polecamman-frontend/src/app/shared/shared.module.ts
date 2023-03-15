import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyLoadImagesDirective} from "./utils/lazy-load-images.directive";
import {ImageCarouselComponent} from "./ui/image-carousel/image-carousel.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    LazyLoadImagesDirective,
    ImageCarouselComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LazyLoadImagesDirective,
    ImageCarouselComponent,
  ]
})
export class SharedModule {
}
