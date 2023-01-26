import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {Contacts} from "../../data-types/Contacts";
import {ContactService} from "../../services/contact.service";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit, AfterViewInit {
  @Input() open = true;
  contacts!: Contacts;
  shownInfo: any;
  displayInfo = false;
  infoOpacity = 0;

  @ViewChild('aligner') aligner!: ElementRef;

  constructor(private contactService: ContactService, private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  ngAfterViewInit() {
    this.languageService.currentLanguage.subscribe((language) => {
      let content = language === 'hu' ? 'Kapcsolat' : 'Contacts';
      this.aligner.nativeElement.style.setProperty('--aligner-content', '"' + content + '"');
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
    setTimeout(() => {
      if(this.displayInfo) this.showInfo(text);
    }, 2000);
  }
}
