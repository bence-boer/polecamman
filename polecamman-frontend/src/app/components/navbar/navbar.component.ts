import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterState} from "@angular/router";

@Component({
  selector: 'polecamman-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    let limit = 0.3;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        limit = this.router.url == "/" ?  0.3 : 0.1;
      }
    });
    document.body.addEventListener("scroll", (e) => {
      this.scrolled = document.body.scrollTop >= window.innerHeight * limit;
    })
  }
}
