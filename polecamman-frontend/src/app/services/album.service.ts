import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ApiResponse} from "../data-types/ApiResponse";
import {Album} from "../data-types/Album";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient: HttpClient) {
  }

  getAllAlbums(locale: string) {
    return (this.httpClient.get(environment.serverURL + '/api/albums?locale=' + locale + '&populate=media') as Observable<ApiResponse<Album[]>>).pipe(map(v => v.data!));
  }

  getAlbumByID(id: number, locale: string) {
    return (this.httpClient.get(environment.serverURL + '/api/albums/' + id + '?locale=' + locale + '&populate=media') as Observable<ApiResponse<Album>>).pipe(map(v => v.data!));
  }

  getAlbumBySlug(slug: string, locale: string) {
    return (this.httpClient.get(environment.serverURL + '/api/slugify/slugs/album/' + slug + '?locale=' + locale + '&populate=media') as Observable<ApiResponse<Album>>).pipe(map(v => v.data!));
  }
}
