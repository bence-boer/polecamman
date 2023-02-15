import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {ApiResponse} from "../data-types/ApiResponse";
import {Gear} from "../data-types/Gear";
import {QueryBuilder} from "../utilities/query.builder";

@Injectable({
  providedIn: 'root'
})
export class GearService {
  constructor(private httpClient: HttpClient,
              @Inject(LOCALE_ID) readonly locale: string) {
  }

  getGear(locale = this.locale){
    const url = new QueryBuilder(environment.serverURL, '/api/gear')
      .setLocale(locale)
      .setPopulate('media')
      .build();
    return (this.httpClient.get(url) as Observable<ApiResponse<Gear>>).pipe(map(v=>v.data!));
  }
}
