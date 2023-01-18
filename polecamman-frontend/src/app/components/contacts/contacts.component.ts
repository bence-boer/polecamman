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
  shownInfo : any;

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  showInfo(info: string) {
    this.shownInfo = info;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideInfo();
  }

  hideInfo() {
    this.shownInfo = null;
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    this.showInfo('Copied to clipboard');
  }
}
