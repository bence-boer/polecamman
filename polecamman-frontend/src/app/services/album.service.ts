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

  getAllAlbums(){
    return (this.httpClient.get(environment.serverURL+'/api/albums?populate=media') as Observable<ApiResponse<Album[]>>).pipe(map(v=>v.data!));
  }

  getAlbumByID(id: number){
    return (this.httpClient.get(environment.serverURL+'/api/albums/'+id+'?populate=media') as Observable<ApiResponse<Album>>).pipe(map(v=>v.data!));
  }

  getAlbumBySlug(slug: string){
    return this.getAlbumByID(this.findAlbumIDBySlug(slug));
    //return (this.httpClient.get(environment.serverURL+'/api/slugify/slugs/album/'+slug+'?populate=media') as Observable<ApiResponse<Album>>).pipe(map(v=>v.data!));
  }                                                       //api/slugify/slugs/:modelName/:slug

  private findAlbumIDBySlug(slug: string){
    let id = 1;
    return id;
  }
}
