import {AfterViewInit, Component, ElementRef, HostListener} from '@angular/core';
import {Contacts} from "../../data-types/Contacts";
import {ContactService} from "../../services/contact.service";
import {catchError, Observable, retry} from "rxjs";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements AfterViewInit {
  open = true;
  contacts$: Observable<Contacts>;
  shownInfo: any;
  displayInfo = false;
  infoOpacity = 0;
  localizedCopyText = $localize`Copied to clipboard`;
  localizedNotSupportedText = $localize`Not supported`;

  constructor(private contactService: ContactService,
              private host: ElementRef) {
    this.contacts$ = this.contactService.getContacts().pipe(
      retry(3),
      catchError(error => ContactsComponent.handleError(error))
    );
  }

  ngAfterViewInit() {
    const content = $localize`Contacts`;
    this.host.nativeElement.style.setProperty('--aligner-content', '"' + content + '"');
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
        if (this.displayInfo) this.showInfo(text);
      }, 2000);
    }, () => {
      this.showInfo(this.localizedNotSupportedText);
      setTimeout(() => {
        if (this.displayInfo) this.showInfo(text);
      }, 2000);
    });
  }

  private static handleError(error: Error): Observable<Contacts> {
    console.error(error);
    return new Observable<Contacts>();
  }
}
