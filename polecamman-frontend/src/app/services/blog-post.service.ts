import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {BlogPost} from "../data-types/BlogPost";
import {ApiResponse} from "../data-types/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private httpClient:HttpClient) { }

  getPosts(){
    return (this.httpClient.get('http://localhost:1337/api/blog-posts?populate=media') as Observable<ApiResponse<BlogPost[]>>).pipe(map(v=>v.data!));
  }
}

