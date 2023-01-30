import {Component, OnInit} from '@angular/core';
import {Album} from "../../data-types/Album";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../../services/album.service";
import {environment} from "../../../environments/environment";
import {MediaElement} from "../../data-types/MediaElement";
import {Unsubscriber} from "../../utilities/unsubscriber";

@Component({
  selector: 'album-page',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent extends Unsubscriber implements OnInit {
  album ?: Album;
  media ?: MediaElement[];
  pictures ?: MediaElement[];
  videos ?: MediaElement[];
  serverURL = environment.serverURL;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    super();
  }

  ngOnInit(): void {
    let slug = this.route.snapshot.paramMap.get('slug');
    this.subscription = this.albumService.getAlbumBySlug(slug!).subscribe((album) => {
      this.album = album;
      this.media = album.attributes.media.data.map((media) => media.attributes);
    });
  }
}
