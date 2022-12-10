import { Component, Input, OnInit } from '@angular/core';
import { MarketApiService } from 'src/app/services/market-api.service';

@Component({
  selector: 'app-marketcard',
  templateUrl: './marketcard.component.html',
  styleUrls: ['./marketcard.component.css']
})
export class MarketcardComponent implements OnInit {
  @Input() marketItem: any;

  constructor(private marketApi: MarketApiService) { }

  ngOnInit(): void {
  }

  onSelled() {
    this.marketApi.deleteMarketItem({"id": this.marketItem.id}).subscribe(
      (response) => {console.log("Hello World")}
    );

  }

}

