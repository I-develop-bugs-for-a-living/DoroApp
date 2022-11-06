import { Component, OnInit } from '@angular/core';
import { WmApiService } from 'src/app/services/wm-api.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-machine-status',
  templateUrl: './machine-status.component.html',
  styleUrls: ['./machine-status.component.css']
})
export class MachineStatusComponent implements OnInit {
  title = 'DoroPWA';
  statuses = ['In Use', 'Done', 'Free']
  Machines = {'Waschmaschine 1': 'In Use', 'Waschmaschine 2': 'Free', 'Waschmaschine 3': 'Done', 'Waschmaschine 4': 'Done'};
  Trockner = {"Trockner 1": "Free", "Trockner 2": "Done"};
  counter = 0;

  constructor(private api:WmApiService, private router:Router) {}

  ngOnInit():void {
    this.api.getWMachines().subscribe((response:any) => {this.Machines = response})
    this.api.getTrockner().subscribe((response:any) => {this.Trockner = response})
  }

  redirectToPeopleList() {
    this.router.navigate(['/people_list']);
  }
  
  switchStatus(id:string, status:string) {
    this.api.setWMachinesStatus(id, status).subscribe((response) => {alert(response)})
    this.api.getWMachines().subscribe((response:any) => {this.Machines = response})
  }

  switchStatusT(id:string, status:string) {
    this.api.setTrocknerStatus(id, status).subscribe((response) => {alert(response)})
    this.api.getTrockner().subscribe((response:any) => {this.Trockner = response})
  }
}
