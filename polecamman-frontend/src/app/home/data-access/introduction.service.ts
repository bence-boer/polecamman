import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs";
import {ApiResponse} from "../../data-types/ApiResponse";
import {Introduction} from "../../data-types/Introduction";

@Injectable({
  providedIn: 'root'
})
export class IntroductionService {
  constructor(private httpClient: HttpClient,
              @Inject(LOCALE_ID) readonly locale: string) {
  }

  getIntroduction(locale = this.locale) {
    const url = `${environment.serverURL}/api/introduction`;
    const queryParams = new HttpParams()
      .set('locale', locale);

    // TODO: Error handling
    return this.httpClient.get<ApiResponse<Introduction>>(url, {params: queryParams})
      .pipe(map(v => v.data!));
  }
}
