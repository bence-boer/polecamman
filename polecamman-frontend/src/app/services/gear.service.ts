import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs";
import {ApiResponse} from "../data-types/ApiResponse";
import {Gear} from "../data-types/Gear";

@Injectable({
  providedIn: 'root'
})
export class GearService {
  constructor(private httpClient: HttpClient,
              @Inject(LOCALE_ID) readonly locale: string) {
  }

  getGear(locale = this.locale) {
    const url = `${environment.serverURL}/api/gear?locale=${locale}&populate=media`;
    const queryParams = new HttpParams()
      .set('locale', locale)
      .set('populate', 'media');

    // TODO: Error handling
    return this.httpClient.get<ApiResponse<Gear>>(url, {params: queryParams})
      .pipe(map(v => v.data!));
  }
}
