import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {LocaleService} from "../../services/locale.service";
import {Observable} from "rxjs";

@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
})
export class HamburgerMenuComponent {
  language$: Observable<string>;
  menuOpen = false;
  canClose = false;
  @ViewChild('toggler') toggler!: ElementRef;

  constructor(private languageService: LocaleService) {
    this.language$ = this.languageService.currentLocale;
  }

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
