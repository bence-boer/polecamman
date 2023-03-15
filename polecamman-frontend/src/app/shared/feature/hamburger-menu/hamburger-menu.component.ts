import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { NavbarItemComponent } from "../navbar/navbar-item/navbar-item.component";
import { LocaleChangerComponent } from "../locale-changer/locale-changer.component";

@Component({
  standalone: true,
  imports: [
    NavbarItemComponent,
    LocaleChangerComponent
  ],
  selector: 'hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
})
export class HamburgerMenuComponent {
  menuOpen = false;
  canClose = false;
  @ViewChild('toggler') toggler!: ElementRef;

  @HostListener('click') onClick() {
    if (this.menuOpen && this.canClose) {
      this.menuOpen = false;
      this.toggler.nativeElement.checked = false;
      return;
    }
    if (this.toggler.nativeElement.checked) {
      this.menuOpen = true;
      this.canClose = true;
    }
  }
}
