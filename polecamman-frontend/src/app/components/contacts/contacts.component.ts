import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Contacts} from "../../data-types/Contacts";
import {ContactService} from "../../services/contact.service";
import {LocaleService} from "../../services/locale.service";
import {catchError, Observable, retry, Subscription} from "rxjs";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit, AfterViewInit {
  open = true;
  contacts$: Observable<Contacts>;
  shownInfo: any;
  displayInfo = false;
  infoOpacity = 0;
  localizedCopyText = 'Copy to clipboard';
  localizedNotSupportedText = 'Not supported';
  subscriptions: Subscription[] = [];

  @ViewChild('aligner') aligner!: ElementRef;

  constructor(private contactService: ContactService,
              private languageService: LocaleService) {
    this.contacts$ = this.contactService.getContacts().pipe(
      retry(3),
      catchError(error => ContactsComponent.handleError(error))
    );
  }

  ngOnInit(): void {
    // TODO: remove this when localization is implemented
    const subscription = this.languageService.currentLocale.subscribe((language) => {
      this.localizedCopyText = language === 'hu' ? 'Vágólapra másolva!' : 'Copied to clipboard!';
      this.localizedNotSupportedText = language === 'hu' ? 'Nem támogatott!' : 'Not supported!';
    });
    this.subscriptions.push(subscription);
  }

  ngAfterViewInit() {
    // TODO: remove this when localization is implemented
    const subscription = this.languageService.currentLocale.subscribe((language) => {
      let content = language === 'hu' ? 'Kapcsolat' : 'Contacts';
      this.aligner.nativeElement.style.setProperty('--aligner-content', '"' + content + '"');
    });
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    // TODO: remove this when localization is implemented
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  showInfo(info: string) {
    // TODO: pls god no
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

  private static handleError(error: Error): Observable<Contacts> {
    console.error(error);
    return new Observable<Contacts>();
  }
}
