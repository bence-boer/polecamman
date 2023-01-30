import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, retry} from 'rxjs';
import {Locale} from "../data-types/Locale";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  availableLocales: string[];
  private locale: BehaviorSubject<string>;
  currentLocale: Observable<string>;

  constructor(private httpClient: HttpClient) {
    this.availableLocales = ['en'];
    this.locale = new BehaviorSubject<string>(this.availableLocales[0]);
    this.currentLocale = this.locale.asObservable();

    this.getLocales().pipe(retry(3)).subscribe(locales => {
      this.availableLocales = locales.map(locale => locale.code);
    });
  }

  getLocales(): Observable<Locale[]> {
    const url = environment.serverURL + '/api/i18n/locales';
    return (this.httpClient.get(url) as Observable<Locale[]>);
  }

  setLocale(locale: string): void {
    if (this.availableLocales.includes(locale)) {
      this.locale.next(locale);
    }
  }
}
