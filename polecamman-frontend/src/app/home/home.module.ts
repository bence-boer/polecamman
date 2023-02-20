import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogModule} from "../blog/blog.module";
import {HomePage} from "./home.page";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogModule
  ]
})
export class HomeModule {
}
