import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {ApiResponse} from "../data-types/ApiResponse";
import {Introduction} from "../data-types/Introduction";

@Injectable({
  providedIn: 'root'
})
export class IntroductionService {

  constructor(private httpClient: HttpClient) {
  }

  getIntroduction(language: string) {
    return (this.httpClient.get(environment.serverURL + '/api/introduction?locale=' + language) as Observable<ApiResponse<Introduction>>).pipe(map(v => v.data!));
  }
}
