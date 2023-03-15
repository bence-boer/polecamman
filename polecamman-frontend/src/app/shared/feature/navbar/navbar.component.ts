import {Component, HostListener} from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { NavbarItemComponent } from "./navbar-item/navbar-item.component";
import { ContactsComponent } from "../contacts/contacts.component";
import { LocaleChangerComponent } from "../locale-changer/locale-changer.component";
import { HamburgerMenuComponent } from "../hamburger-menu/hamburger-menu.component";

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    NavbarItemComponent,
    ContactsComponent,
    LocaleChangerComponent,
    HamburgerMenuComponent,
    RouterLink
  ]
})
export class NavbarComponent {
  scrolled = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      if (this.router.url != "/" && !this.scrolled) this.scrolled = true;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.router.url == "/") {
      this.scrolled = window.scrollY > window.innerHeight * 0.3;
    }
  }
}
