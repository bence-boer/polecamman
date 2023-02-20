import {Component} from '@angular/core';
import {GearItem} from "./utils/GearItem";
import {GearService} from "./data-access/gear.service";
import {catchError, mergeMap, Observable, of, retry, startWith, tap} from "rxjs";

@Component({
  selector: 'gear-page',
  templateUrl: './gear.page.html',
  styleUrls: ['./gear.page.scss'],
})
export class GearPage {
  gearItems$: Observable<GearItem[]>;
  problem?: 'ERROR' | 'EMPTY';

  private startWith: number = 3;
  private loadStep: number = 3;
  long_array: number[] = Array(20).fill(0);

  constructor(private gearService: GearService) {
    this.gearItems$ = this.gearService.getGearItems().pipe(
      startWith(Array(this.startWith).fill(null)),
      retry(3),
      catchError(error => {
        this.problem = 'ERROR';
        console.error(error);
        return of([] as GearItem[]);
      }),
      tap(posts => {
        if (posts.length == 0) this.problem = 'EMPTY';
      })
    );
  }

  getMoreGear(): void {
    this.gearItems$ = this.gearItems$.pipe(
      mergeMap(gearItems => {
        return this.gearService.getGearItems(gearItems.length, this.loadStep).pipe(
          startWith(gearItems.concat(Array(this.loadStep).fill(null))),
          catchError(error => {
            // TODO: handleError()
            this.problem = 'ERROR';
            console.error(error);
            return of(gearItems);
          })
        );
      }),
      catchError(error => this.handleError(error))
    );
  }

  private handleError(error: Error): Observable<GearItem[]> {
    console.error(error);
    this.problem = 'ERROR';
    return new Observable<GearItem[]>();
  }
}
