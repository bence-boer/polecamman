import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ApiResponse} from "../data-types/ApiResponse";
import {Album} from "../data-types/Album";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return (this.httpClient.get('http://localhost:1337/api/albums?populate=media') as Observable<ApiResponse<Album[]>>).pipe(map(v=>v.data!));
  }
}
