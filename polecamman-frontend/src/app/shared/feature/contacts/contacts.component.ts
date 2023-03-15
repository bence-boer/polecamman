import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Contacts } from "../../utils/Contacts";
import { ContactService } from "../../data-access/contact.service";
import { catchError, Observable, retry } from "rxjs";
import { PopoverDirective } from "../../utils/popover.directive";
import { AsyncPipe, NgIf } from "@angular/common";

@Component({
  standalone: true,
  imports: [
    PopoverDirective,
    AsyncPipe,
    NgIf
  ],
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements AfterViewInit {
  open = true;
  contacts$: Observable<Contacts>;

  constructor(private contactService: ContactService,
              public readonly host: ElementRef) {
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
