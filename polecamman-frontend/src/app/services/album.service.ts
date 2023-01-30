import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ApiResponse} from "../data-types/ApiResponse";
import {Album} from "../data-types/Album";
import {environment} from "../../environments/environment";
import {LocaleService} from "./locale.service";
import {QueryBuilder} from "../utilities/query.builder";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  locale: string = 'en';

  constructor(private httpClient: HttpClient, private languageService: LocaleService) {
    this.languageService.currentLocale.subscribe((language) => {
      this.locale = language;
    });
  }

  getAlbums(locale = this.locale) {
    const url = new QueryBuilder(environment.serverURL, '/api/albums')
      .setLocale(locale)
      .setPopulate('media')
      .setSort('id','desc')
      .setPagination(0,10)
      .build();
    return (this.httpClient.get(url) as Observable<ApiResponse<Album[]>>).pipe(map(v => v.data!));
  }

  getAlbumByID(id: number, locale = this.locale) {
    const url = new QueryBuilder(environment.serverURL, '/api/albums/' + id)
      .setLocale(locale)
      .setPopulate('media')
      .build();
    return (this.httpClient.get(url) as Observable<ApiResponse<Album>>).pipe(map(v => v.data!));
  }

  getAlbumBySlug(slug: string, locale = this.locale) {
    const url = new QueryBuilder(environment.serverURL, '/api/slugify/slugs/album/' + slug)
      .setLocale(locale)
      .setPopulate('media')
      .build();
    return (this.httpClient.get(url) as Observable<ApiResponse<Album>>).pipe(map(v => v.data!));
  }
}
