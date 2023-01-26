import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {BlogPost} from "../data-types/BlogPost";
import {ApiResponse} from "../data-types/ApiResponse";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(locale: string) {
    return (this.httpClient.get(environment.serverURL + '/api/blog-posts?locale=' + locale + '&populate=media') as Observable<ApiResponse<BlogPost[]>>).pipe(map(v => v.data!));
  }

  getPostByID(id: number, locale: string) {
    return (this.httpClient.get(environment.serverURL + '/api/blog-posts/' + id + '?locale=' + locale + '&populate=media') as Observable<ApiResponse<BlogPost>>).pipe(map(v => v.data!));
  }

  getPostBySlug(slug: string, locale: string) {
    return (this.httpClient.get(environment.serverURL + '/api/slugify/slugs/blog-post/' + slug + '?locale=' + locale + '&populate=media') as Observable<ApiResponse<BlogPost>>).pipe(map(v => v.data!));
  }
}

