import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {BlogPost} from "../data-types/BlogPost";
import {ApiResponse} from "../data-types/ApiResponse";
import {environment} from "../../environments/environment";
import {Album} from "../data-types/Album";

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private httpClient:HttpClient) { }

  getPosts(){
    return (this.httpClient.get(environment.serverURL+'/api/blog-posts?populate=media') as Observable<ApiResponse<BlogPost[]>>).pipe(map(v=>v.data!));
  }

  getBySlug(slug: string){
    return (this.httpClient.get(environment.serverURL+'/api/slugify/slugs/blog-posts/'+slug+'?populate=media') as Observable<ApiResponse<BlogPost>>).pipe(map(v=>v.data!));
  }
}

