import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  language = 'en';
  localizedHomeText = 'Home';
  localizedBlogText = 'Blog';
  localizedGalleryText = 'Gallery';
  localizedGearText = 'Gear';

  constructor(private router: Router, private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe(language => {
      this.language = language;
      this.setLanguage(language);
    });
    let setScrolled = () => {
      this.scrolled = document.body.scrollTop >= window.innerHeight * 0.3;
    }
    this.router.events.subscribe(event => {
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

  setLanguage(language: string) {
    switch (language) {
      case 'hu':
        this.localizedHomeText = 'Főoldal';
        this.localizedBlogText = 'Blog';
        this.localizedGalleryText = 'Galéria';
        this.localizedGearText = 'Felszerelés';
        break;
      case 'en':
      default:
        this.localizedHomeText = 'Home';
        this.localizedBlogText = 'Blog';
        this.localizedGalleryText = 'Gallery';
        this.localizedGearText = 'Gear';
        break;
    }
  }
}
