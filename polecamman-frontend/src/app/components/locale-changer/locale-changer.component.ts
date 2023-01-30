import {Component, HostListener} from '@angular/core';
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'locale-changer',
  templateUrl: './locale-changer.component.html',
  styleUrls: ['./locale-changer.component.scss']
})
export class LocaleChangerComponent {
  open = false;
  changed = false;

  constructor(public languageService: LanguageService) {
  }

  changeLanguage(language: string) {
    this.languageService.changeLanguage(language);
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
