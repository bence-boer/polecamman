import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ApiResponse} from "../data-types/ApiResponse";
import {Album} from "../data-types/Album";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private http: HttpClient,
              @Inject(LOCALE_ID) readonly locale: string) {
  }

  getAlbums(start: number = 0, limit: number = 4): Observable<Album[]> {
    const url = `${environment.serverURL}/api/albums`;
    let queryParams = new HttpParams()
      .append("locale", this.locale)
      .append("populate", "media")
      .append("sort[0]", "id:desc")
      .append("pagination[start]", start.toString())
      .append("pagination[limit]", limit.toString());

    // TODO: Error handling
    return this.http.get<ApiResponse<Album[]>>(url, {params: queryParams})
      .pipe(map(v => v.data!));
  }

  getAlbumByID(id: number, locale = this.locale) {
    const url = `${environment.serverURL}/api/albums/${id}`;
    let queryParams = new HttpParams()
      .append("locale", locale)
      .append("populate", "media");

    // TODO: Error handling
    return this.http.get<ApiResponse<Album>>(url, {params: queryParams})
      .pipe(map(v => v.data!));
  }

  getAlbumBySlug(slug: string, locale = this.locale) {
    const url = `${environment.serverURL}/api/slugify/slugs/album/${slug}`;
    let queryParams = new HttpParams()
      .append("locale", locale)
      .append("populate", "media");

    // TODO: Error handling
    return this.http.get<ApiResponse<Album>>(url, {params: queryParams})
      .pipe(map(v => v.data!));
  }
}
