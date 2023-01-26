import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'coming-soon-page',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {
  language = 'en';
  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe(language => {
      this.language = language;
    });
  }

}
