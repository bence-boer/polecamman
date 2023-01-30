import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../../services/language.service";
import {Unsubscriber} from "../../utilities/unsubscriber";
import {Router} from "@angular/router";

@Component({
  selector: 'not-found-page',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent extends Unsubscriber implements OnInit {
  language: string = 'en';

  constructor(private languageService: LanguageService, private router: Router) {
    super();
    // @ts-ignore
    // this.state.console.log(this.router.getCurrentNavigation().extras.state.source);
  }

  ngOnInit(): void {
    this.subscription = this.languageService.currentLanguage.subscribe((language: string) => {
      this.language = language;
    });
  }
}
