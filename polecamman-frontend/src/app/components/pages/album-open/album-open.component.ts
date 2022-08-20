import {Component, Input, OnInit} from '@angular/core';
import {Album} from "../../../data-types/Album";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../../../services/album.service";
import {environment} from "../../../../environments/environment";
import {MediaElement} from "../../../data-types/MediaElement";

@Component({
  selector: 'app-album-open',
  templateUrl: './album-open.component.html',
  styleUrls: ['./album-open.component.scss']
})
export class AlbumOpenComponent implements OnInit {
  album ?: Album;
  pictures ?: MediaElement[];
  videos ?: MediaElement[];
  serverURL = environment.serverURL;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.albumService.getAlbumByID(+id!).subscribe((album) => {
      this.album = album;
      this.pictures = album.attributes.media.data.filter((media) => media.attributes.mime.includes("image")).map((media) => media.attributes);
      this.videos = album.attributes.media.data.filter((media) => media.attributes.mime.includes("video")).map((media) => media.attributes);
    });
  }
}
