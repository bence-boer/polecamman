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
import {NavbarComponent} from "./feature/navbar/navbar.component";
import {NavbarItemComponent} from "./feature/navbar/navbar-item/navbar-item.component";
import {ContactsComponent} from "./feature/contacts/contacts.component";
import {FooterComponent} from "./ui/footer/footer.component";
import {HamburgerMenuComponent} from "./feature/hamburger-menu/hamburger-menu.component";
import {RouterModule} from "@angular/router";
import { PopoverDirective } from './utils/popover.directive';

@NgModule({
  declarations: [
    MediaViewerComponent,
    SkeletonRectComponent,
    TooltipComponent,
    LazyLoadImagesDirective,
    ScrollTrackerDirective,
    UiMediaLoaderDirective,
    ImageCarouselComponent,
    LocaleChangerComponent,
    NavbarComponent,
    NavbarItemComponent,
    HamburgerMenuComponent,
    ContactsComponent,
    FooterComponent,
    PopoverDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MediaViewerComponent,
    SkeletonRectComponent,
    TooltipComponent,
    LazyLoadImagesDirective,
    ScrollTrackerDirective,
    UiMediaLoaderDirective,
    ImageCarouselComponent,
    LocaleChangerComponent,
    NavbarComponent,
    NavbarItemComponent,
    HamburgerMenuComponent,
    ContactsComponent,
    FooterComponent,
    PopoverDirective
  ]
})
export class SharedModule {
}
