import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Locale} from "../data-types/Locale";

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  constructor(private httpClient: HttpClient) {
  }

  getLocales(): Observable<Locale[]> {
    const url = environment.serverURL + '/api/i18n/locales';
    return (this.httpClient.get(url) as Observable<Locale[]>);
  }
}
