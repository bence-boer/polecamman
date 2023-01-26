import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import { LocalesService } from './locales.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language = new BehaviorSubject<string>('en');
  currentLanguage = this.language.asObservable();
  availableLanguages: Observable<string[]>;

  constructor(private localesService: LocalesService) {
    this.availableLanguages = this.localesService.getLocales().pipe(map(locales => locales.map((locale) => locale.code)));
  }

  changeLanguage(language: string) {
    this.availableLanguages.subscribe(languages => {
      if (languages.includes(language)) {
        this.language.next(language);
      } else {
        console.log(`Language ${language} is not available`);
      }
    });
  }
}
