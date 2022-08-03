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

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return (this.httpClient.get(environment.serverURL+'/api/albums?populate=media') as Observable<ApiResponse<Album[]>>).pipe(map(v=>v.data!));
  }

  getBySlug(slug: string){
    return (this.httpClient.get(environment.serverURL+'/api/slugify/slugs/albums/'+slug+'?populate=media') as Observable<ApiResponse<Album>>).pipe(map(v=>v.data!));
  }
}
