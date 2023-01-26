import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language = new BehaviorSubject<string>('en');
  currentLanguage = this.language.asObservable();

  constructor() { }

  changeLanguage(language: string) {
    this.language.next(language);
  }
}
