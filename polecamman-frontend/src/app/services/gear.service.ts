import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {ApiResponse} from "../data-types/ApiResponse";
import {Gear} from "../data-types/Gear";
import {QueryBuilder} from "../utilities/query.builder";
import {LanguageService} from "./language.service";

@Injectable({
  providedIn: 'root'
})
export class GearService {
  locale: string = 'en';

  constructor(private httpClient:HttpClient,
              private languageService: LanguageService) {
    this.languageService.currentLanguage.subscribe(language => this.locale = language);
  }

  getGear(locale = this.locale){
    const url = new QueryBuilder(environment.serverURL, '/api/gear')
      .setLocale(locale)
      .setPopulate('media')
      .build();
    return (this.httpClient.get(url) as Observable<ApiResponse<Gear>>).pipe(map(v=>v.data!));
  }
}
