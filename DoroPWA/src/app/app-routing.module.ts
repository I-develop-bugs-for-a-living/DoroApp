import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachineStatusComponent } from './components/machine-status/machine-status.component';
import { MensaBuddyComponent } from './components/mensa-buddy/mensa-buddy.component';
import { PeoplelistComponent } from './components/peoplelist/peoplelist.component';

const routes: Routes = [
  {path:'', component: MachineStatusComponent},
  {path:'people_list', component: PeoplelistComponent},
  {path:'mensa_buddy', component: MensaBuddyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
