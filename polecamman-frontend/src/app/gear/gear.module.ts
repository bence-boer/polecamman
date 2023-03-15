import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GearPage } from "./gear.page";
import { SharedModule } from "../shared/shared.module";
import { GearItemComponent } from './ui/gear-item/gear-item.component';
import { GearRoutingModule } from "./gear-routing.module";
import { CarouselComponent } from "../shared/ui/carousel/carousel.component";
import { SkeletonRectComponent } from "../shared/ui/skeleton-rect/skeleton-rect.component";
import { UiMediaLoaderDirective } from "../shared/utils/ui-media-loader.directive";

@NgModule({
  declarations: [
    GearPage,
    GearItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GearRoutingModule,
    CarouselComponent,
    SkeletonRectComponent,
    UiMediaLoaderDirective
  ]
})
export class GearModule {
}
