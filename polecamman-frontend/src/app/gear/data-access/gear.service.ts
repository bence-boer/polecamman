import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map, Observable} from "rxjs";
import {ApiResponse} from "../../shared/utils/ApiResponse";
import {GearItem} from "../utils/GearItem";

@Injectable({
  providedIn: 'root'
})
export class GearService {
  constructor(private httpClient: HttpClient,
              @Inject(LOCALE_ID) readonly locale: string) {
  }

  getGearItems(start: number = 0, limit: number = 5): Observable<GearItem[]> {
    const url = `${environment.serverURL}/api/gears`;
    let queryParams = new HttpParams()
      .append("locale", this.locale)
      .append("populate", "media")
      .append("sort[0]", "id:desc")
      .append("pagination[start]", start.toString())
      .append("pagination[limit]", limit.toString());

    // TODO: Error handling
    return this.httpClient.get<ApiResponse<GearItem[]>>(url, {params: queryParams})
      .pipe(map(v => v.data!));
  }
}
