import {Component} from '@angular/core';
import {LocaleService} from "../../services/locale.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'not-found-page',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  language$: Observable<string>;
  state: any;

  constructor(private languageService: LocaleService,
              private router: Router) {
    this.language$ = this.languageService.currentLocale;
    try {
      // @ts-ignore
      this.state = this.router.getCurrentNavigation().extras.state;
    } catch (e) {
      this.state = {};
    }
    console.log(this.state);
  }
}
