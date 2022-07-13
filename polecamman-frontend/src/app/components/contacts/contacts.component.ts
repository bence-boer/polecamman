import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'polecamman-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  @Input() open = true;
  constructor() {}

  ngOnInit(): void {}
}
