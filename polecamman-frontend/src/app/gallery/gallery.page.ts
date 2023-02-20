import {Component} from '@angular/core';
import {AlbumService} from "./data-access/album.service";
import {Album} from "./utils/Album";
import {BehaviorSubject, catchError, mergeMap, Observable, retry, tap} from "rxjs";

@Component({
  selector: 'gallery-page',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage {
  albums$: BehaviorSubject<Album[]> = new BehaviorSubject<Album[]>(Array(4).fill(null));
  problem?: 'ERROR' | 'EMPTY';
  allLoaded = false;

  private startWith: number = 4;
  private loadStep: number = 3;
  private loaded: number = 0;

  constructor(private albumService: AlbumService) {
    let request = this.albumService.getAlbums(0, this.startWith).pipe(
      retry(3),
      catchError(error => this.handleError(error))
    );

    this.albums$.pipe(
      mergeMap(albums => request.pipe(
        tap(newAlbums => {
          albums.splice(0, albums.length, ...newAlbums);
          this.loaded += newAlbums.length;
        }),
        catchError(error => this.handleError(error))
      ))
    ).subscribe();
  }

  getMoreAlbums(): void {
    if (this.allLoaded) return;
    let request = this.albumService.getAlbums(this.loaded, this.loadStep).pipe(
      retry(3),
      catchError(error => this.handleError(error))
    );

    this.albums$.pipe(
      // push loadStep nulls to the end of the array
      mergeMap(albums => {
        albums.push(...Array(this.loadStep).fill(null));
        return request.pipe(
          tap(newAlbums => {
            albums.splice(albums.length - this.loadStep, this.loadStep, ...newAlbums);
            this.loaded += newAlbums.length;
            if (newAlbums.length < this.loadStep) this.allLoaded = true;
          }),
          catchError(error => this.handleError(error))
        );
      })
    ).subscribe();


    /*
    this.albums$ = this.albums$.pipe(
      mergeMap(albums => {
        return this.albumService.getAlbums(albums.length, this.loadStep).pipe(
          startWith(albums.concat(Array(this.loadStep).fill(null))),
          catchError(error => {
            // TODO: handleError()
            console.error(error);
            this.problem = 'ERROR';
            return of(albums);
          })
        );
      }),
      catchError(error => this.handleError(error))
    );
     */
  }

  private handleError(error: Error): Observable<Album[]> {
    console.error(error);
    this.problem = 'ERROR';
    return new Observable<Album[]>();
  }

  onScrollingFinished() {
    this.getMoreAlbums();
  }
}
