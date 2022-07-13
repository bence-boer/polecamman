import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {ApiResponse, BlogPost} from "../BlogPost";

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private httpClient:HttpClient) { }

  getPosts(){
    return (this.httpClient.get('http://localhost:1337/api/blog-posts?populate=media') as Observable<ApiResponse<BlogPost[]>>).pipe(map(v=>v.data!));
  }
}

