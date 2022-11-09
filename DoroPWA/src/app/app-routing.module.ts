import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachineStatusComponent } from './components/machine-status/machine-status.component';
import { MensaBuddyComponent } from './components/mensa-buddy/mensa-buddy.component';
import { PeoplelistComponent } from './components/peoplelist/peoplelist.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  {path:'w_machine_status', component: MachineStatusComponent},
  {path:'people_list', component: PeoplelistComponent},
  {path:'mensa_buddy', component: MensaBuddyComponent},
  {path:'', component: StartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
