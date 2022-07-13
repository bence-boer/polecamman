import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {BlogPost} from "../BlogPost";
import {ARTICLES} from "../../test-blog-articles";

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private httpClient:HttpClient) { }

  getPosts(){
    return this.httpClient.get('http://localhost:3333/api/posts/get-all') as Observable<BlogPost[]>;
  }
}

