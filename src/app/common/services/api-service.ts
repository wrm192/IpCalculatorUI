import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';




@Injectable({
  providedIn: 'root',
})
export class ApiService {

  // TODO I DONT KNOW HOW TO DO THIS YET NONE OF THIS IS RIGHT
  constructor(private httpClient: HttpClient) {
  }

  get(): Observable<any> {
    const x = this.httpClient.get('http://localhost:8080/api/subnet?ip=200.110.10.10&suffix=30'); // this is bad
    console.log(x);
    return x;
  }

}
