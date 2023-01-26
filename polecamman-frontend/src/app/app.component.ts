import { Component, OnInit } from '@angular/core';
import {LanguageService} from "./services/language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'polecamman-frontend';

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    let browserLang = navigator.language;
    const supportedLanguages = ['hu', 'en'];
    if (supportedLanguages.includes(browserLang.slice(0,2))) {
      this.languageService.changeLanguage(browserLang.slice(0,2));
    } else {
      this.languageService.changeLanguage('en'); // set default language
    }
  }
}
