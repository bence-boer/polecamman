import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'polecamman-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss'],
})
export class NavbarItemComponent implements OnInit {
  @Input() route !: string;
  constructor() {}

  ngOnInit(): void {}
}
