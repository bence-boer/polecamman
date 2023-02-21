import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {Contacts} from "../../utils/Contacts";
import {ContactService} from "../../data-access/contact.service";
import {catchError, Observable, retry} from "rxjs";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements AfterViewInit {
  open = true;
  contacts$: Observable<Contacts>;

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

  private static handleError(error: Error): Observable<Contacts> {
    console.error(error);
    return new Observable<Contacts>();
  }
}
