import {Component} from '@angular/core';
import {GearItem} from "./utils/GearItem";
import {GearService} from "./data-access/gear.service";
import {
  BehaviorSubject,
  catchError, concatMap,
  distinctUntilChanged,
  Observable,
  retry, scan,
  startWith, switchMap,
  tap
} from "rxjs";
import { DeviceInfoService } from "../shared/data-access/device-info.service";

@Component({
  selector: 'gear-page',
  templateUrl: './gear.page.html',
  styleUrls: ['./gear.page.scss'],
})
export class GearPage {
  private readonly loadStep: number = 3;
  private loaded: number = 0;

  private start$ = new BehaviorSubject<number>(0);
  gearItems$: Observable<GearItem[]>;
  empty = false;
  error = false;
  allLoaded = false;

  constructor(
    private gearService: GearService,
    private deviceInfoService: DeviceInfoService,
  ) {
    switch (this.deviceInfoService.DEVICE_TYPE) {
      case 'mobile':
        this.loadStep = 3;
        break;
      case 'tablet':
        this.loadStep = 6;
        break;
      case 'desktop':
        this.loadStep = 9;
        break;
    }

    this.gearItems$ = this.start$.pipe(
      distinctUntilChanged(),
      concatMap((start) =>
        this.gearService.getGearItems(start, this.loadStep).pipe(
          startWith(Array(this.loadStep).fill(null)),
          retry(3),
          catchError(error => this.handleError(error))
        )),
      tap(gearItems => {
        this.allLoaded = gearItems.length < this.loadStep;
      }),
      scan((acc, gearItems) => {
          const merged = acc.concat(gearItems) as GearItem[];
          if (merged[merged.length - 1] === null && !this.allLoaded) {
            return merged;
          }
          return merged.filter(gearItem => gearItem !== null);
        }
      ),
      tap(gearItems => {
        this.loaded = gearItems.length;
      }),
      switchMap(gearItems => {
        if(gearItems.length === 0) {
          this.empty = true;
          return new Observable<GearItem[]>();
        }
        return new Observable<GearItem[]>(subscriber => {
          subscriber.next(gearItems);
          subscriber.complete();
        }
      )}),
      catchError(error => this.handleError(error))
    );
  }

  getMoreGear(): void {
    if (this.allLoaded) return;
    this.start$.next(this.loaded);
  }

  private handleError(error: Error): Observable<GearItem[]> {
    console.error(error);
    this.error = true;
    return new Observable<GearItem[]>();
  }

  ngOnDestroy(): void {
    this.start$.complete();
  }

  gearTrackBy(index: number, gearItem: GearItem): number {
    if (!gearItem) return -1;
    return gearItem.id;
  }
}
