import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
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
