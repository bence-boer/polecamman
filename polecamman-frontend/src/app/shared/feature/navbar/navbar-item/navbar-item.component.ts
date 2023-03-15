import {Component, Input, OnInit} from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive
  ]
})
export class NavbarItemComponent implements OnInit {
  @Input() route !: string;
  constructor() {}

  ngOnInit(): void {}
}
