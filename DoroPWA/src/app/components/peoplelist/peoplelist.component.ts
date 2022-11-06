import { Component, OnInit } from '@angular/core';
import { people } from './people';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.css']
})
export class PeoplelistComponent implements OnInit {
  searchText = "";
  people = people;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  redirectToWMaschine() {
    this.router.navigate(['']);
  }


}
