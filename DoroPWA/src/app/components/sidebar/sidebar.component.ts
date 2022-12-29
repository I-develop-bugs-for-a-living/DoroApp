import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarToggle:any = document.querySelector(".sidebarToggle");
  document:any = document;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.sidebarToggle = document.querySelector(".sidebarToggle");
    
    this.sidebarToggle.addEventListener("click", () => {
        this.document.querySelector("body").classList.toggle("active");
        this.document.getElementById("sidebarToggle").classList.toggle("active");
        console.log("sidebarToggle clicked");
    });

  }

  redirecting(a:any) {
    this.router.navigate([a]);
  }

}
