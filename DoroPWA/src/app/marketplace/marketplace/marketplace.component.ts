import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirecting(a: string) {
    this.router.navigate([a]);
  }

}
