import {Component} from '@angular/core';
import {AlbumService} from "../../services/album.service";
import {Album} from "../../data-types/Album";
import {LocaleService} from "../../services/locale.service";
import {catchError, Observable, retry} from "rxjs";

@Component({
  selector: 'gallery-page',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  albums$: Observable<Album[]>;
  language$: Observable<string>;

  constructor(private albumService: AlbumService, private languageService: LocaleService) {
    this.albums$ = this.albumService.getAlbums().pipe(
      retry(3),
      catchError(error => GalleryComponent.handleError(error))
    );
    this.language$ = this.languageService.currentLocale;
  }

  private static handleError(error: Error): Observable<Album[]> {
    console.error(error);
    return new Observable<Album[]>();
  }
}
