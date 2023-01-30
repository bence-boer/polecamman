import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ApiResponse} from "../data-types/ApiResponse";
import {Album} from "../data-types/Album";
import {environment} from "../../environments/environment";
import {LanguageService} from "./language.service";
import {QueryBuilder} from "../utilities/query.builder";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  locale: string = 'en';

  constructor(private httpClient: HttpClient, private languageService: LanguageService) {
    this.languageService.currentLanguage.subscribe((language) => {
      this.locale = language;
    });
  }

  getAlbums() {
    const url = new QueryBuilder(environment.serverURL, '/api/albums')
      .setLocale(this.locale)
      .setPopulate('media')
      .setSort('id','desc')
      .setPagination(0,10)
      .build();
    return (this.httpClient.get(url) as Observable<ApiResponse<Album[]>>).pipe(map(v => v.data!));
  }

  getAlbumByID(id: number) {
    const url = new QueryBuilder(environment.serverURL, '/api/albums/' + id)
      .setLocale(this.locale)
      .setPopulate('media')
      .build();
    return (this.httpClient.get(url) as Observable<ApiResponse<Album>>).pipe(map(v => v.data!));
  }

  getAlbumBySlug(slug: string) {
    const url = new QueryBuilder(environment.serverURL, '/api/slugify/slugs/album/' + slug)
      .setLocale(this.locale)
      .setPopulate('media')
      .build();
    return (this.httpClient.get(url) as Observable<ApiResponse<Album>>).pipe(map(v => v.data!));
  }
}
