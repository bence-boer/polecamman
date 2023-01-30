import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {BlogPost} from "../data-types/BlogPost";
import {ApiResponse} from "../data-types/ApiResponse";
import {environment} from "../../environments/environment";
import {LanguageService} from "./language.service";
import {QueryBuilder} from "../utilities/query.builder";

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  locale: string = 'en';

  constructor(private httpClient: HttpClient, private languageService: LanguageService) {
    this.languageService.currentLanguage.subscribe((language) => {
      this.locale = language;
    });
  }

  getPosts() {
    const url = new QueryBuilder(environment.serverURL, '/api/blog-posts')
      .setLocale(this.locale)
      .setPopulate('media')
      .setSort('id','desc')
      .setPagination(0,10)
      .build();
    return (this.httpClient.get(url) as Observable<ApiResponse<BlogPost[]>>).pipe(map(v => v.data!));
  }

  getPostByID(id: number) {
    const url = new QueryBuilder(environment.serverURL, '/api/blog-posts/' + id)
      .setLocale(this.locale)
      .setPopulate('media')
      .build();
    return (this.httpClient.get(url) as Observable<ApiResponse<BlogPost>>).pipe(map(v => v.data!));
  }

  getPostBySlug(slug: string) {
    const url = new QueryBuilder(environment.serverURL, '/api/slugify/slugs/blog-post/' + slug)
      .setLocale(this.locale)
      .setPopulate('media')
      .build();
    return (this.httpClient.get(url) as Observable<ApiResponse<BlogPost>>).pipe(map(v => v.data!));
  }
}
