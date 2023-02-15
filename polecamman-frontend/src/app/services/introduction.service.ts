import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {ApiResponse} from "../data-types/ApiResponse";
import {Introduction} from "../data-types/Introduction";
import {QueryBuilder} from "../utilities/query.builder";

@Injectable({
  providedIn: 'root'
})
export class IntroductionService {
  constructor(private httpClient: HttpClient,
              @Inject(LOCALE_ID) readonly locale: string) {
  }

  getIntroduction(locale = this.locale) {
    const url = new QueryBuilder(environment.serverURL, '/api/introduction')
      .setLocale(locale)
      .build();
    return (this.httpClient.get(url) as Observable<ApiResponse<Introduction>>).pipe(map(v => v.data!));
  }
}
