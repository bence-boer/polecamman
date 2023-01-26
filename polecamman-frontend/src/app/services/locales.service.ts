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
    return (this.httpClient.get(environment.serverURL + '/api/i18n/locales') as Observable<Locale[]>);
  }
}
