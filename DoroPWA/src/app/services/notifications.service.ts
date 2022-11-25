import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient) { }

  addSubscription(subscription: PushSubscription) {
    return lastValueFrom(this.http.post('http://localhost:3000/api/subscription', {subscription}));
  }

  notifications(data: string) {
    return lastValueFrom(this.http.post('http://localhost:3000/api/notifications', {data}));
  }
}
