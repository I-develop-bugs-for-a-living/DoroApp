import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { apiUrl } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class WmApiService {
  private apiUrl: string = apiUrl;

  constructor(private http: HttpClient) {  }

  getMachines() {
    return this.http.get(`${this.apiUrl}/machines_status`)
  }

  setMachinesStatus(id:string, status:string) {

    const formData: FormData = new FormData();

    formData.append('machine_id', id);
    formData.append('machine_status', status);
    return this.http.post(`${this.apiUrl}/machines_status`, formData)
  }

}
