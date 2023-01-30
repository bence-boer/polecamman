import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Contacts} from "../../data-types/Contacts";
import {IntroductionService} from "../../services/introduction.service";
import {Introduction} from "../../data-types/Introduction";
import {Unsubscriber} from "../../utilities/unsubscriber";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'landing-page',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent extends Unsubscriber implements OnInit, AfterViewInit {
  @ViewChild('toggler') toggler!: ElementRef;
  @ViewChild('textbox') textbox!: ElementRef;
  @Input() contacts!: Contacts;
  introduction?: Introduction;
  language = 'en';

  constructor(private introductionService: IntroductionService,
              private languageService: LanguageService) {
    super();
  }

  ngOnInit(): void {
    this.subscription = this.languageService.currentLanguage.subscribe((language: string) => {
      this.language = language;
      this.subscription = this.introductionService.getIntroduction(language).subscribe((introduction) => {
        this.introduction = introduction;
      });
    });
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
}
