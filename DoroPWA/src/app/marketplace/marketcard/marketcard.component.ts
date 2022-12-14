import { Component, Input, OnInit, Output } from '@angular/core';
import { MarketApiService } from 'src/app/services/market-api.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-marketcard',
  templateUrl: './marketcard.component.html',
  styleUrls: ['./marketcard.component.css']
})
export class MarketcardComponent implements OnInit {
  @Input() marketItem: any;
  @Output() reload = new EventEmitter<string>();

  constructor(private marketApi: MarketApiService) { }

  ngOnInit(): void {
  }

  onSelled() {
    this.marketApi.deleteMarketItem({"id": this.marketItem.id}).subscribe((response) => { this.reload.emit('reload');});

  }

}

