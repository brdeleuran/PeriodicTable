import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Elements } from './elements';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  connect() {
    return this.httpClient.get<Elements[]>('https://neelpatel05.pythonanywhere.com');
  }
}
