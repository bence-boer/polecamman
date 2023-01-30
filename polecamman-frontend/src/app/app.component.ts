import { Component, OnInit } from '@angular/core';
import {LocaleService} from "./services/locale.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'polecamman-frontend';

  constructor(private localeService: LocaleService) { }

  ngOnInit() {
    let browserLang = navigator.language.slice(0,2);
    this.localeService.setLocale(browserLang);
  }
}
