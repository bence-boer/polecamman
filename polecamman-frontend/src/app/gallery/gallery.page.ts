import {Component, OnDestroy} from '@angular/core';
import {AlbumService} from "./data-access/album.service";
import {Album} from "./utils/Album";
import {
  BehaviorSubject,
  catchError,
  concatMap,
  distinctUntilChanged,
  mergeMap,
  Observable,
  retry, scan,
  startWith,
  tap
} from "rxjs";
import {BlogPost} from "../blog/utils/BlogPost";
import {BlogPostService} from "../blog/data-access/blog-post.service";

@Component({
  selector: 'gallery-page',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnDestroy {
  private loadStep: number = 3;
  private loaded: number = 0;

  private start$ = new BehaviorSubject<number>(0);
  albums$: Observable<Album[]>;
  problem?: 'ERROR' | 'EMPTY';
  allLoaded = false;

  constructor(private albumService: AlbumService) {
    this.albums$ = this.start$.pipe(
      distinctUntilChanged(),
      concatMap((start) =>
        this.albumService.getAlbums(start, this.loadStep).pipe(
          startWith(Array(this.loadStep).fill(null)),
          retry(3),
          catchError(error => this.handleError(error))
        )),
      tap(albums => {
        this.allLoaded = albums.length < this.loadStep;
      }),
      scan((acc, albums) => {
          const merged = acc.concat(albums) as Album[];
          if (merged[merged.length - 1] === null && !this.allLoaded) {
            return merged;
          }
          return merged.filter(post => post !== null);
        }
      ),
      tap(albums => {
        this.loaded = albums.length;
      }),
      catchError(error => this.handleError(error))
    );
  }

  getMoreAlbums(): void {
    if (this.allLoaded) return;
    this.start$.next(this.loaded);
  }

  private handleError(error: Error): Observable<Album[]> {
    console.error(error);
    this.problem = 'ERROR';
    return new Observable<Album[]>();
  }

  ngOnDestroy(): void {
    this.start$.complete();
  }
}
