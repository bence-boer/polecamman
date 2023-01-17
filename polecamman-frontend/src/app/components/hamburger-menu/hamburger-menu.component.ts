import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
})
export class HamburgerMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const toggler = document.getElementById("toggler") as HTMLInputElement | any;
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
}
