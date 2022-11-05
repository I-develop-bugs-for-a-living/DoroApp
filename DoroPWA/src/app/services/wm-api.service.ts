import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WmApiService {
  private apiUrl: string = "http://localhost:5000"

  constructor(private http: HttpClient) {  }

  getWMachines() {
    return this.http.get(`${this.apiUrl}/w_machines_status`)
  }

  setWMachinesStatus(id:string, status:string) {

    const formData: FormData = new FormData();

    formData.append('machine_id', id);
    formData.append('machine_status', status);
    return this.http.post(`${this.apiUrl}/w_machines_status`, formData)
  }

  getTrockner() {
    return this.http.get(`${this.apiUrl}/trockner_status`)
  }

  setTrocknerStatus(id:string, status:string) {

    const formData: FormData = new FormData();

    formData.append('machine_id', id);
    formData.append('machine_status', status);
    return this.http.post(`${this.apiUrl}/trockner_status`, formData)
  }


}