import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPage } from './blog.page';
import { BlogPostComponent } from './feature/blog-post/blog-post.component';
import { BlogPostPreviewComponent } from './ui/blog-post-preview/blog-post-preview.component';
import {SharedModule} from "../shared/shared.module";
import { ScrollTrackerDirective } from "../shared/utils/scroll-tracker.directive";
import { MediaViewerComponent } from "../shared/ui/media-viewer/media-viewer.component";
import { PopoverDirective } from "../shared/utils/popover.directive";
import { SkeletonRectComponent } from "../shared/ui/skeleton-rect/skeleton-rect.component";

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
    MediaViewerComponent,
    PopoverDirective,
    SkeletonRectComponent
  ]
})
export class BlogModule { }
