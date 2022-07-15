import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ApiResponse} from "../data-types/ApiResponse";
import {Contacts} from "../data-types/Contacts";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient:HttpClient) { }

  getContacts(){
    return (this.httpClient.get('http://localhost:1337/api/contact') as Observable<ApiResponse<Contacts>>).pipe(map(v=>v.data!));
  }
}
