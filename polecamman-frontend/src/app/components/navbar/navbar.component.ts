import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Unsubscriber} from "../../utilities/unsubscriber";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent extends Unsubscriber implements OnInit {
  scrolled = false;

  constructor(private router: Router) {
    super();
  }

  ngOnInit(): void {
    let setScrolled = () => {
      this.scrolled = document.body.scrollTop >= window.innerHeight * 0.3;
    }
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
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
