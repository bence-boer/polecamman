import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Contacts} from "../../data-types/Contacts";
import {ContactService} from "../../services/contact.service";
import {LanguageService} from "../../services/language.service";
import {Unsubscriber} from "../../utilities/unsubscriber";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent extends Unsubscriber implements OnInit, AfterViewInit {
  open = true;
  contacts!: Contacts;
  shownInfo: any;
  displayInfo = false;
  infoOpacity = 0;
  localizedCopyText = 'Copy to clipboard';
  localizedNotSupportedText = 'Not supported';

  @ViewChild('aligner') aligner!: ElementRef;

  constructor(private contactService: ContactService, private languageService: LanguageService) {
    super();
  }

  ngOnInit(): void {
    this.subscription = this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
    this.subscription = this.languageService.currentLanguage.subscribe((language) => {
      this.localizedCopyText = language === 'hu' ? 'Vágólapra másolva!' : 'Copied to clipboard!';
      this.localizedNotSupportedText = language === 'hu' ? 'Nem támogatott!' : 'Not supported!';
    });
  }

  ngAfterViewInit() {
    this.subscription = this.languageService.currentLanguage.subscribe((language) => {
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
    if (text === this.localizedCopyText) return;
    navigator.clipboard.writeText(text).then(() => {
      this.showInfo(this.localizedCopyText);
      setTimeout(() => {
        if(this.displayInfo) this.showInfo(text);
      }, 2000);
    }, () => {
      this.showInfo(this.localizedNotSupportedText);
      setTimeout(() => {
        if(this.displayInfo) this.showInfo(text);
      }, 2000);
    });
  }
}
