import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {IntroductionService} from "./data-access/introduction.service";
import {Introduction} from "./utils/Introduction";
import {catchError, Observable, retry} from "rxjs";

@Component({
  selector: 'landing-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('toggler') toggler!: ElementRef;
  @ViewChild('textbox') textbox!: ElementRef;
  introduction$!: Observable<Introduction>;

  constructor(private introductionService: IntroductionService) {
    this.introduction$ = this.introductionService.getIntroduction().pipe(
      retry(3),
      catchError(error => HomePage.handleError(error))
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
