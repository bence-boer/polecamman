import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Contacts} from "../../data-types/Contacts";
import {IntroductionService} from "../../services/introduction.service";
import {Introduction} from "../../data-types/Introduction";
import {catchError, Observable, retry} from "rxjs";

@Component({
  selector: 'landing-page',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements AfterViewInit {
  @ViewChild('toggler') toggler!: ElementRef;
  @ViewChild('textbox') textbox!: ElementRef;
  @Input() contacts!: Contacts;
  language$!: Observable<string>;
  introduction$!: Observable<Introduction>;

  constructor(private introductionService: IntroductionService) {
    this.introduction$ = this.introductionService.getIntroduction().pipe(
      retry(3),
      catchError(error => LandingComponent.handleError(error))
    );
  }

  ngAfterViewInit() {
    this.toggler.nativeElement.addEventListener('click', () => {
      if (this.textbox.nativeElement.style.height) {
        this.textbox.nativeElement.style.height = null;
      } else {
        this.textbox.nativeElement.style.height = this.textbox.nativeElement.scrollHeight + 50 + "px";
      }
      this.textbox.nativeElement.classList.toggle('text-open');
      this.toggler.nativeElement.classList.toggle('toggler-open');
    });
  }

  private static handleError(error: Error): Observable<Introduction> {
    console.error(error);
    return new Observable<Introduction>();
  }
}
