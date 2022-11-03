import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DoroPWA';
  Machines = [{name: "Waschmaschine 1", status: true}, {name: "Waschmaschine 2", status: true}, {name:"Waschmaschine 3", status: false}, {name: "Waschmaschine 4", status: true}];
  Trockner = ["Trockner 1", "Trockner 2"];
}
