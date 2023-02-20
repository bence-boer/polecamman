import {Component} from '@angular/core';
import {AlbumService} from "../../services/album.service";
import {Album} from "../../data-types/Album";
import {catchError, mergeMap, Observable, of, retry, startWith, tap} from "rxjs";

@Component({
  selector: 'gallery-page',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  albums$: Observable<Album[]>;
  problem?: 'ERROR' | 'EMPTY';

  private startWith: number = 4;
  private loadStep: number = 3;

  constructor(private albumService: AlbumService) {
    this.albums$ = this.albumService.getAlbums().pipe(
      startWith(Array(this.startWith).fill(null)),
      retry(3),
      catchError(error => {
        // TODO: handleError()
        this.problem = 'ERROR';
        console.error(error);
        return of([] as Album[]);
      }),      tap(albums => {
        if (albums.length == 0) this.problem = 'EMPTY';
      })
    );
  }

  getMoreAlbums(): void {
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
