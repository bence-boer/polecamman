import {Component} from '@angular/core';
import {Album} from "../../data-types/Album";
import {ActivatedRoute, Router} from "@angular/router";
import {AlbumService} from "../../services/album.service";
import {environment} from "../../../environments/environment";
import {MediaElement} from "../../data-types/MediaElement";
import {catchError, map, Observable, retry, switchMap} from "rxjs";

@Component({
  selector: 'album-page',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  album$: Observable<Album>;
  media$: Observable<MediaElement[]>;
  serverURL = environment.serverURL;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private albumService: AlbumService) {
    this.album$ = this.route.params.pipe(
      switchMap(params => this.albumService.getAlbumBySlug(params['slug']).pipe(
        retry(3),
        catchError(error => this.handleError(error))
      ))
    );
    this.media$ = this.album$.pipe(
      map(album => AlbumComponent.extractMedia(album))
    );
  }

  private static extractMedia(album: Album): MediaElement[] {
    return album.attributes.media.data.map((media) => media.attributes);
  }

  private handleError(error: Error): Observable<Album> {
    this.navigateTo404Page(error);
    return new Observable<Album>();
  }

  private navigateTo404Page(error?: Error) {
    this.router.navigate(['/404'], {
      skipLocationChange: true,
      state: {
        source: 'blog-post',
        error: error
      }
    });
  }
}
