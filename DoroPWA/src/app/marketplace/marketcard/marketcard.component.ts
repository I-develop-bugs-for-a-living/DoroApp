import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketcard',
  templateUrl: './marketcard.component.html',
  styleUrls: ['./marketcard.component.css']
})
export class MarketcardComponent implements OnInit {
  @Input() marketItem: any;

  constructor() { }

  ngOnInit(): void {
  }

}

