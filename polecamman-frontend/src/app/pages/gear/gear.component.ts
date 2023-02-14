import {Component} from '@angular/core';
import {Gear} from "../../data-types/Gear";
import {GearService} from "../../services/gear.service";
import {catchError, Observable, retry} from "rxjs";

@Component({
  selector: 'gear-page',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.scss'],
})
export class GearComponent {
  gear$: Observable<Gear>;

  constructor(private gearService: GearService) {
    this.gear$ = this.gearService.getGear().pipe(
      retry(3),
      catchError(error => GearComponent.handleError(error))
    );
  }

  private static handleError(error: Error): Observable<Gear> {
    console.error(error);
    return new Observable<Gear>();
  }
}
