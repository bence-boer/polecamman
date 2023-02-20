import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  scrolled = false;
  routerSubscription!: Subscription;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    let setScrolled = () => {
      this.scrolled = document.body.scrollTop >= window.innerHeight * 0.3;
    }
    this.routerSubscription = this.router.events.subscribe(event => {
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

  ngOnDestroy(){
    this.routerSubscription.unsubscribe();
  }
}
