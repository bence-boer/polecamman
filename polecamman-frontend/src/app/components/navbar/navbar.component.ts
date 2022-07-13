import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'polecamman-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  constructor() {}

  ngOnInit(): void {
    document.body.addEventListener("scroll", (e) => {
      this.scrolled = document.body.scrollTop >= window.innerHeight * 0.3;
    })
  }
}
