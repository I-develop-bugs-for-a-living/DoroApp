import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketApiService } from 'src/app/services/market-api.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  constructor(private router:Router, private marketApi:MarketApiService) { }

  marketItems:any;

  ngOnInit(): void {
    this.marketApi.getMarketData().subscribe((response) => {
      this.marketItems = response;
    })
  }

  redirecting(a: string) {
    this.router.navigate([a]);
  }

  onReload(a: any) {
    this.marketApi.getMarketData().subscribe((response) => {
      this.marketItems = response;
    })
  }

}
