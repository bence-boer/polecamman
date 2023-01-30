import { Component, OnInit } from '@angular/core';
import {LocaleService} from "../../services/locale.service";

@Component({
  selector: 'coming-soon-page',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {
  language = 'en';
  constructor(private languageService: LocaleService) { }

  ngOnInit(): void {
    this.languageService.currentLocale.subscribe(language => {
      this.language = language;
    });
  }

}
