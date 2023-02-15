import {Component} from '@angular/core';
import {AlbumService} from "../../services/album.service";
import {Album} from "../../data-types/Album";
import {catchError, Observable, retry} from "rxjs";

@Component({
  selector: 'gallery-page',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  albums$: Observable<Album[]>;

  constructor(private albumService: AlbumService) {
    this.albums$ = this.albumService.getAlbums().pipe(
      retry(3),
      catchError(error => GalleryComponent.handleError(error))
    );
  }

  private static handleError(error: Error): Observable<Album[]> {
    console.error(error);
    return new Observable<Album[]>();
  }
}
