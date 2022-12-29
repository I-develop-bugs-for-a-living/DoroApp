import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate, UnrecoverableStateEvent, VersionEvent, VersionReadyEvent, SwPush } from '@angular/service-worker';
import { NotificationsService } from './services/notifications.service';
import { PUBLIC_VAPID_KEY_OF_SERVER } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DoroPWA';
  notificationData:string = '';

  constructor(
    private router:Router,
    private updateService: SwUpdate,
    private pushService: SwPush,
    private notificationService: NotificationsService
    ) {}

  ngOnInit():void {
    console.log('AppComponent.ngOnInit');
    if (!this.updateService.isEnabled) {
      console.log('Service Worker is not enabled');
      return;
    }
    console.log('AppComponent.ngOnInit: Service Worker is enabled');
    this.#handelUpdates();
    this.#handelPushNotifications();
  }

  unsubscribe():void {
    this.pushService.unsubscribe().then(() => {
      console.log('Unsubscribed from push notifications');
    });
  }

  async #handelPushNotifications() {
    try {
      const sub = await this.pushService.requestSubscription({
        serverPublicKey: PUBLIC_VAPID_KEY_OF_SERVER,
      });
      this.notificationService.addSubscription(sub);
      console.log('Subscribed to push notifications');
    } catch (err) {
      console.error('Could not subscribe to push notifications', err);
    }
    this.pushService.messages.subscribe((message) => {
      console.log('Received a push message', message);
    });
    this.pushService.notificationClicks.subscribe((message) => {
      console.log('Received a push notification click', message);
    });
    this.pushService.subscription.subscribe((subscription) => {
      console.log('Received a push subscription', subscription);
    });
  }

  #handelUpdates() {
    this.updateService.versionUpdates.subscribe((event: VersionEvent) => {
      console.log('AppComponent.versionUpdates', event);
      alert(event.type);
      if (event.type == 'VERSION_READY' && confirm(`New version ${(event as VersionReadyEvent).latestVersion.hash} available. Load New Version?`)) {
        window.location.reload();
      }
    });
    
    this.updateService.unrecoverable.subscribe((event: UnrecoverableStateEvent) => {
      alert('Error reason : ' + event.reason);
    });
  }

  redirecting(a:string) {
    this.router.navigate([a]);
  }
}
