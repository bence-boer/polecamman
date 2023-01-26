import {Component, OnInit} from '@angular/core';
import {AlbumService} from "../../services/album.service";
import {Album} from "../../data-types/Album";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'gallery-page',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  albums: Album[] = [];
  language = 'en';

  constructor(private albumService: AlbumService, private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      this.language = language;
      this.albumService.getAllAlbums(language).subscribe((albums) => {
        this.albums = albums.reverse();
      });
    });
  }
}
