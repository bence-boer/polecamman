import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {BlogPost} from "../utils/BlogPost";
import {ApiResponse} from "../../shared/utils/ApiResponse";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  constructor(private http: HttpClient,
              @Inject(LOCALE_ID) readonly locale: string,) {
  }

  getPosts(start: number = 0, limit: number = 4): Observable<BlogPost[]> {
    const url = `${environment.serverURL}/api/blog-posts`;

    let queryParams = new HttpParams()
      .append("locale", this.locale)
      .append("populate", "media")
      .append("sort[0]", "id:desc")
      .append("pagination[start]", start.toString())
      .append("pagination[limit]", limit.toString());

    // TODO: Error handling
    return this.http.get<ApiResponse<BlogPost[]>>(url, {params: queryParams})
      .pipe(map(v => v.data!));
  }

  getPostByID(id: number) {
    const url = `${environment.serverURL}/api/blog-posts/${id}`;
    let queryParams = new HttpParams()
      .append("locale", this.locale)
      .append("populate", "media");

    // TODO: Error handling
    return this.http.get<ApiResponse<BlogPost>>(url, {params: queryParams})
      .pipe(map(v => v.data!));
  }

  getPostBySlug(slug: string) {
    const url = `${environment.serverURL}/api/slugify/slugs/blog-post/${slug}`;
    let queryParams = new HttpParams()
      .append("locale", this.locale)
      .append("populate", "media");

    // TODO: Error handling
    return this.http.get<ApiResponse<BlogPost>>(url, {params: queryParams})
      .pipe(map(v => v.data!));
  }
}
