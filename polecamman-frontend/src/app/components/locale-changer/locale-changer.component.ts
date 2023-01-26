import {Component} from '@angular/core';
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'locale-changer',
  templateUrl: './locale-changer.component.html',
  styleUrls: ['./locale-changer.component.scss']
})
export class LocaleChangerComponent {
  constructor(public languageService: LanguageService) {
  }
}
