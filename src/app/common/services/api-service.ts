import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';





@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient, ) {}

  get(ipAddress: string, suffix: number, ): Observable<any> {
    return this.httpClient.get(ApiConstants.BASE_PATH + ApiConstants.SUBNET_PATH + '?ip=' + ipAddress + '&suffix=' + suffix);
  }
}
export const ApiConstants = {
  BASE_PATH: 'http://localhost:8080/api/',
  SUBNET_PATH: 'subnet',
};

