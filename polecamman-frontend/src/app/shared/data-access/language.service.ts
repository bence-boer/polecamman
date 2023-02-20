import {Injectable, LOCALE_ID, Inject} from '@angular/core';
import {catchError, Observable, of, retry} from 'rxjs';
import {Locale} from "../../data-types/Locale";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  availableLocales: string[];

  constructor(@Inject(LOCALE_ID) readonly locale: string,
              private httpClient: HttpClient) {
    this.availableLocales = [locale];

    this.getLocales().pipe(
      retry(3),
      catchError(err => {
        console.log('Error while fetching locales', err);
        return of([]);
      })
    ).subscribe(locales => {
      this.availableLocales = locales.map(locale => locale.code);
    });
  }

  getLocales(): Observable<Locale[]> {
    const url = environment.serverURL + '/api/i18n/locales';
    return (this.httpClient.get(url) as Observable<Locale[]>);
  }
}
