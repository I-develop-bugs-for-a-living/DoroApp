import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachineStatusComponent } from './components/machine-status/machine-status.component';
import { MensaBuddyComponent } from './components/mensa-buddy/mensa-buddy.component';
import { PeoplelistComponent } from './components/peoplelist/peoplelist.component';
import { StartComponent } from './components/start/start.component';
import { MarketplaceComponent } from './marketplace/marketplace/marketplace.component';
import { NewItemComponent } from './marketplace/new-item/new-item.component';
import { NewSharedItemComponent } from './shareplace/new-shared-item/new-shared-item.component';
import { OverviewComponent } from './shareplace/overview/overview.component';

const routes: Routes = [
  {path:'w_machine_status', component: MachineStatusComponent},
  {path:'people_list', component: PeoplelistComponent},
  {path:'mensa_buddy', component: MensaBuddyComponent},
  {path:'marketplace', component: MarketplaceComponent},
  {path:'new-item', component: NewItemComponent},
  {path:'shared', component: OverviewComponent},
  {path:'new_shared', component: NewSharedItemComponent},
  {path:'', component: StartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
