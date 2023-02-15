import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'not-found-page',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
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
