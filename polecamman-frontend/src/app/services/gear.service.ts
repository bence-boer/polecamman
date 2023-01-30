import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {ApiResponse} from "../data-types/ApiResponse";
import {Gear} from "../data-types/Gear";

@Injectable({
  providedIn: 'root'
})
export class GearService {

  constructor(private httpClient:HttpClient) { }

  getGear(){
    const url = environment.serverURL + '/api/gear';
    return (this.httpClient.get(url) as Observable<ApiResponse<Gear>>).pipe(map(v=>v.data!));
  }
}
