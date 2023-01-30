import {Component} from '@angular/core';
import {AlbumService} from "../../services/album.service";
import {Album} from "../../data-types/Album";
import {LocaleService} from "../../services/locale.service";
import {Observable} from "rxjs";

@Component({
  selector: 'gallery-page',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  albums$: Observable<Album[]>;
  language$: Observable<string>;

  constructor(private albumService: AlbumService, private languageService: LocaleService) {
    this.albums$ = this.albumService.getAlbums();
    this.language$ = this.languageService.currentLocale;
  }
}
