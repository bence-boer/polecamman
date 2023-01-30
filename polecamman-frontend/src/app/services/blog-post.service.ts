import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";
import {BlogPost} from "../data-types/BlogPost";
import {ApiResponse} from "../data-types/ApiResponse";
import {environment} from "../../environments/environment";
import {LocaleService} from "./locale.service";
import {QueryBuilder} from "../utilities/query.builder";

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  locale$: Observable<string>;

  constructor(private httpClient: HttpClient, private languageService: LocaleService) {
    this.locale$ = this.languageService.currentLocale;
  }

  getPosts() {
    return this.locale$.pipe(
      switchMap(locale => {
        const url = new QueryBuilder(environment.serverURL, '/api/blog-posts')
          .setLocale(locale)
          .setPopulate('media')
          .setSort('id', 'desc')
          .setPagination(0, 10)
          .build();
        return this.httpClient.get(url) as Observable<ApiResponse<BlogPost[]>>;
      }),
      map(response => response.data!)
    );
  }

  getPostByID(id: number) {
    return this.locale$.pipe(
      switchMap(locale => {
        const url = new QueryBuilder(environment.serverURL, '/api/blog-posts/' + id)
          .setLocale(locale)
          .setPopulate('media')
          .build();
        return this.httpClient.get(url) as Observable<ApiResponse<BlogPost>>;
      }),
      map(response => response.data!)
    );
  }

  getPostBySlug(slug: string) {
    return this.locale$.pipe(
      switchMap(locale => {
        const url = new QueryBuilder(environment.serverURL, '/api/slugify/slugs/blog-post/' + slug)
          .setLocale(locale)
          .setPopulate('media')
          .build();
        return this.httpClient.get(url) as Observable<ApiResponse<BlogPost>>;
      }),
      map(response => response.data!)
    );
  }
}
