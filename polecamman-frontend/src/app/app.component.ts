import { Component, OnInit } from '@angular/core';
import {LanguageService} from "./services/language.service";
import {LocalesService} from "./services/locales.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'polecamman-frontend';

  constructor(private localesService: LocalesService, private languageService: LanguageService) { }

  ngOnInit() {
    let browserLang = navigator.language.slice(0,2);
    this.localesService.getLocales().subscribe((locales) => {
      if(locales.some((locale) => locale.code === browserLang)){
        this.languageService.changeLanguage(browserLang);
        return;
      }
      this.languageService.changeLanguage('en');
    });
  }
}
