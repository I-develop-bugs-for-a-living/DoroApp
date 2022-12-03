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
  machines = [
    {"id": 1, "name": "Waschmaschine 1", "status": "Done"},
    {"id": 2, "name": "Waschmaschine 2", "status": "Done"},
    {"id": 3, "name": "Waschmaschine 3", "status": "Done"},
    {"id": 4, "name": "Waschmaschine 4", "status": "Done"},
    {"id": 5, "name": "Trockner 1", "status": "Done"},
    {"id": 6, "name": "Trockner 2", "status": "Done"},
];

  constructor(private api:WmApiService, private router:Router) {}

  ngOnInit():void {
    this.api.getMachines().subscribe((response:any) => {this.machines = response})
  }

  redirectToPeopleList() {
    this.router.navigate(['/people_list']);
  }
  
  switchStatus(id:string, status:string) {
    this.api.setMachinesStatus(id, status).subscribe((response) => {alert(response)})
    this.api.getMachines().subscribe((response:any) => {this.machines = response})
  }
}
