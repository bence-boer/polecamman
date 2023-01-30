import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {ApiResponse} from "../data-types/ApiResponse";
import {Introduction} from "../data-types/Introduction";
import {QueryBuilder} from "../utilities/query.builder";
import {LocaleService} from "./locale.service";

@Injectable({
  providedIn: 'root'
})
export class IntroductionService {
  locale: string = 'en';

  constructor(private httpClient: HttpClient, private languageService: LocaleService) {
    this.languageService.currentLocale.subscribe(locale => this.locale = locale);
  }

  getIntroduction(locale = this.locale) {
    const url = new QueryBuilder(environment.serverURL, '/api/introduction')
      .setLocale(locale)
      .build();
    return (this.httpClient.get(url) as Observable<ApiResponse<Introduction>>).pipe(map(v => v.data!));
  }
}
