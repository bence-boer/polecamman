import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Contacts} from "../../data-types/Contacts";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  @Input() open = true;
  @Input() contacts!: Contacts;
  shownInfo: any;
  displayInfo = false;
  infoOpacity = 0;

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  showInfo(info: string) {
    this.shownInfo = info;
    this.displayInfo = true;
    setTimeout(() => {
      this.infoOpacity = 1;
    }, 10);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideInfo();
  }

  hideInfo() {
    this.infoOpacity = 0;
    setTimeout(() => {
      this.displayInfo = false;
    }, 360);
  }

  copyToClipboard(text: string) {
    if (text == 'Copied to clipboard!') return;
    navigator.clipboard.writeText(text);

    this.showInfo('Copied to clipboard!');
  }
}
