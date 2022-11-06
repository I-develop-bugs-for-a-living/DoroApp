import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-peoplecard',
  templateUrl: './peoplecard.component.html',
  styleUrls: ['./peoplecard.component.css']
})
export class PeoplecardComponent implements OnInit {

  constructor() { }
  @Input() person: any;

  ngOnInit(): void {
  }

}
