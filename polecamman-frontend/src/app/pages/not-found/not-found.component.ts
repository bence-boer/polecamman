import {Component, OnInit} from '@angular/core';
import {LocaleService} from "../../services/locale.service";
import {Unsubscriber} from "../../utilities/unsubscriber";
import {Router} from "@angular/router";

@Component({
  selector: 'not-found-page',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent extends Unsubscriber implements OnInit {
  language: string = 'en';
  state: any;

  constructor(private languageService: LocaleService,
              private router: Router) {
    super();
    try {
      // @ts-ignore
      this.state = this.router.getCurrentNavigation().extras.state;
    } catch (e) {
      this.state = {};
    }
    console.log(this.state);
  }

  ngOnInit(): void {
    this.subscription = this.languageService.currentLocale.subscribe((language: string) => {
      this.language = language;
    });
  }
}
