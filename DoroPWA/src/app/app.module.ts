import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PeoplelistComponent } from './components/peoplelist/peoplelist.component';
import { SearchComponent } from './components/utils/search/search.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { PeoplecardComponent } from './components/peoplecard/peoplecard.component';
import { MachineStatusComponent } from './components/machine-status/machine-status.component';
import { StartComponent } from './components/start/start.component';
import { MensaBuddyComponent } from './components/mensa-buddy/mensa-buddy.component';
import { MarketplaceComponent } from './marketplace/marketplace/marketplace.component';
import { MarketcardComponent } from './marketplace/marketcard/marketcard.component';
import { NewItemComponent } from './marketplace/new-item/new-item.component';
import { OverviewComponent } from './shareplace/overview/overview.component';
import { NewSharedItemComponent } from './shareplace/new-shared-item/new-shared-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PeoplelistComponent,
    SearchComponent,
    PeoplecardComponent,
    MachineStatusComponent,
    StartComponent,
    MensaBuddyComponent,
    MarketplaceComponent,
    MarketcardComponent,
    NewItemComponent,
    OverviewComponent,
    NewSharedItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
