import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { apiUrl } from '../constants';


@Injectable({
  providedIn: 'root'
})
export class MarketApiService {
  private url: string = apiUrl;

  constructor(private http:HttpClient) { }

  getMarketData() {
    return this.http.get(`${this.url}/marketplace`);
  }

  postNewMarketItem(item: any) {
    return this.http.post(`${this.url}/marketplace`, item).subscribe(
      (response) => {console.log("Hello World")}
    );
  }

  deleteMarketItem(json: any) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: json
    }
    return this.http.delete(`${this.url}/marketplace`, options);
  }
}
