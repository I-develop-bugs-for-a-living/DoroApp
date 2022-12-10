import { Component, Input, OnInit } from '@angular/core';
import { WmApiService } from 'src/app/services/wm-api.service';

@Component({
  selector: 'app-machine-card',
  templateUrl: './machine-card.component.html',
  styleUrls: ['./machine-card.component.css']
})
export class MachineCardComponent implements OnInit {
  @Input() machine: any;
  
  constructor(private wmservice: WmApiService) { }

  ngOnInit(): void {
  }

  switchStatus(status: any) {
    this.wmservice.setMachinesStatus(this.machine.id, status).subscribe((response) => {console.log("Machine-card: Updated status")});
    this.machine.status = status;
  }

}
