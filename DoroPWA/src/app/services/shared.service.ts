import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private url: string = apiUrl;
  constructor(private http:HttpClient) { }

  getMarketData() {
    return this.http.get(`${this.url}/sharedplace`);
  }
}
