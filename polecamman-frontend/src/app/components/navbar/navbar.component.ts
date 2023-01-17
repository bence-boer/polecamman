import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'polecamman-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  scrolled = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // let limit = 0.3;
    let setScrolled = () => {
      this.scrolled = document.body.scrollTop >= window.innerHeight * 0.3;
    }
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // limit = this.router.url == "/" ?  0.3 : 0.05;
        if (this.router.url == "/") {
          document.body.addEventListener("scroll", setScrolled);
          setScrolled();
        } else {
          document.body.removeEventListener("scroll", setScrolled);
          this.scrolled = true;
        }
      }
    });
  }
}
