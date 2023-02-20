import {Component, HostListener} from '@angular/core';
import {LanguageService} from "../../data-access/language.service";

@Component({
  selector: 'locale-changer',
  templateUrl: './locale-changer.component.html',
  styleUrls: ['./locale-changer.component.scss']
})
export class LocaleChangerComponent {
  public open = false;
  public changed = false;
  readonly locale = this.languageService.locale;

  constructor(public languageService: LanguageService) {
  }

  changeLanguage() {
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
