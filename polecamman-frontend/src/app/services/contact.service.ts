import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {ApiResponse} from "../data-types/ApiResponse";
import {Contacts} from "../data-types/Contacts";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) {
  }

  getContacts() {
    const url = `${environment.serverURL}/api/contact`;
    // TODO: Error handling

    return this.httpClient.get<ApiResponse<Contacts>>(url)
      .pipe(map(v => v.data!));
  }
}
