import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPage } from './blog.page';
import { BlogPostComponent } from './feature/blog-post/blog-post.component';
import { BlogPostPreviewComponent } from './ui/blog-post-preview/blog-post-preview.component';
import {SharedModule} from "../shared/shared.module";

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
    BlogRoutingModule
  ]
})
export class BlogModule { }
