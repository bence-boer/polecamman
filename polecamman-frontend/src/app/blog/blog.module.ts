import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPage } from './blog.page';
import { BlogPostComponent } from './feature/blog-post/blog-post.component';
import { BlogPostPreviewComponent } from './ui/blog-post-preview/blog-post-preview.component';
import { SharedModule } from "../shared/shared.module";
import { ScrollTrackerDirective } from "../shared/utils/scroll-tracker.directive";
import { PopoverDirective } from "../shared/utils/popover.directive";
import { SkeletonRectComponent } from "../shared/ui/skeleton-rect/skeleton-rect.component";
import { UiMediaLoaderDirective } from "../shared/utils/ui-media-loader.directive";
import { CarouselComponent } from "../shared/ui/carousel/carousel.component";
import { MediaComponent } from "../shared/ui/media/media.component";

@NgModule({
  declarations: [
    BlogPage,
    BlogPostPreviewComponent,
    BlogPostComponent
  ],
  exports: [
    BlogPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule,
    ScrollTrackerDirective,
    PopoverDirective,
    SkeletonRectComponent,
    UiMediaLoaderDirective,
    CarouselComponent,
    MediaComponent
  ]
})
export class BlogModule {}
