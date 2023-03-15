import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogModule} from "../blog/blog.module";
import {HomePage} from "./home.page";
import {SharedModule} from "../shared/shared.module";
import { SkeletonRectComponent } from "../shared/ui/skeleton-rect/skeleton-rect.component";

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogModule,
    SkeletonRectComponent
  ]
})
export class HomeModule {
}
