import {Component, HostListener} from '@angular/core';
import {LocaleService} from "../../services/locale.service";

@Component({
  selector: 'locale-changer',
  templateUrl: './locale-changer.component.html',
  styleUrls: ['./locale-changer.component.scss']
})
export class LocaleChangerComponent {
  open = false;
  changed = false;

  constructor(public languageService: LocaleService) {
  }

  changeLanguage(language: string) {
    this.languageService.setLocale(language);
    this.changed = true;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.open = true;
    this.changed = false;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.open = false;
    this.changed = false;
  }

  @HostListener('click') onClick() {
    this.open = !this.changed;
    this.changed = false;
  }
}
