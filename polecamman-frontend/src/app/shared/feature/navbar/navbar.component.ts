import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  scrolled = false;

  constructor(private router: Router) {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.router.url == "/") {
      this.scrolled = window.scrollY > window.innerHeight * 0.3;
      console.log(this.scrolled)
    }
  }
}
