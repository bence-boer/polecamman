import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'not-found-page',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss']
})
export class NotFoundPage {
  state: any;

  constructor(private router: Router) {
    // TODO: Fix this
    /*
    try {
      // @ts-ignore
      this.state = this.router.getCurrentNavigation().extras.state;
    } catch (e) {
      this.state = {};
    }
    console.log(this.state);
     */
  }
}
