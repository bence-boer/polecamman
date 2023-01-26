import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
})
export class HamburgerMenuComponent implements OnInit {
  @Input() language!: string;
  localizedHomeText = 'Home';
  localizedBlogText = 'Blog';
  localizedGalleryText = 'Gallery';
  localizedGearText = 'Gear';
  constructor() {}

  ngOnInit(): void {
    this.setLanguage(this.language);
    const toggler = document.getElementsByClassName("navigation-toggler")[0] as HTMLInputElement | any;
    let menuOpen = false;
    const menu = document.body;
    menu.addEventListener('click', () => {
      if(menuOpen){
        menuOpen = false;
        toggler.checked = false;
        return;
      }
      if(toggler.checked){
        menuOpen = true;
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
