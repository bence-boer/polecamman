import {Component, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
})
export class HamburgerMenuComponent {
  menuOpen = false;
  @ViewChild('toggler') toggler!: HTMLInputElement;

  constructor() {
  }

  @HostListener('click') onClick() {
    if (this.menuOpen) {
      this.menuOpen = false;
      this.toggler.checked = false;
      return;
    }
    if (this.toggler.checked) {
      this.menuOpen = true;
    }
  }
}
