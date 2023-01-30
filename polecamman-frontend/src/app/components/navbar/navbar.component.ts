import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {LanguageService} from "../../services/language.service";
import {Observable} from "rxjs";
import {Unsubscriber} from "../../utilities/unsubscriber";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent extends Unsubscriber implements OnInit {
  scrolled = false;
  language$: Observable<string>;

  constructor(private router: Router, private languageService: LanguageService) {
    super();
    this.language$ = this.languageService.currentLanguage;
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
