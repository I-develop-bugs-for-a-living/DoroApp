import { Component, OnInit } from '@angular/core';
import { WmApiService } from './services/wm-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DoroPWA';
  statuses = ['In Use', 'Done', 'Free']
  Machines = {'Waschmaschine 1': 'In Use', 'Waschmaschine 2': 'Free', 'Waschmaschine 3': 'Done', 'Waschmaschine 4': 'Done'};
  Trockner = {"Trockner 1": "Free", "Trockner 2": "Done"};
  counter = 0;

  constructor(private api:WmApiService) {}

  ngOnInit():void {
    this.api.getWMachines().subscribe((response:any) => {this.Machines = response})
    this.api.getTrockner().subscribe((response:any) => {this.Trockner = response})
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
