import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPage } from './blog.page';
import {BlogPostComponent} from "./feature/blog-post/blog-post.component";

const routes: Routes = [
  {
    path: '',
    title: $localize`Blog | Polecamman`,
    component: BlogPage
  },
  {
    path: 'blog-post/:slug',
    title: $localize`Blog | Polecamman`,
    component: BlogPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
