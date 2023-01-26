import {Component, OnInit} from '@angular/core';
import {Album} from "../../data-types/Album";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../../services/album.service";
import {environment} from "../../../environments/environment";
import {MediaElement} from "../../data-types/MediaElement";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'album-page',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  album ?: Album;
  pictures ?: MediaElement[];
  videos ?: MediaElement[];
  serverURL = environment.serverURL;

  constructor(private route: ActivatedRoute, private albumService: AlbumService, private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      let slug = this.route.snapshot.paramMap.get('slug');
      this.albumService.getAlbumBySlug(slug!, language).subscribe((album) => {
        this.album = album;
        this.pictures = album.attributes.media.data.filter((media) => media.attributes.mime.includes("image")).map((media) => media.attributes);
        this.videos = album.attributes.media.data.filter((media) => media.attributes.mime.includes("video")).map((media) => media.attributes);
      });
    });
  }
}
