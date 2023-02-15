import {Component, Input, OnInit} from '@angular/core';
import {Album} from "../../data-types/Album";
import {environment} from "../../../environments/environment";
import {MediaElement} from "../../data-types/MediaElement";

@Component({
  selector: 'album-preview',
  templateUrl: './album-preview.component.html',
  styleUrls: ['./album-preview.component.scss'],
})
export class AlbumPreviewComponent implements OnInit {
  @Input() album !: Album;
  thumbnail !: MediaElement;
  multipleMedia = false;
  containsImage = false;
  containsVideo = false;

  serverURL = environment.serverURL;

  constructor() {}

  ngOnInit(): void {
    this.serverURL = environment.serverURL;
    if(!this.album.attributes.media.data.length) return;
    this.thumbnail = this.album.attributes.media.data[0].attributes;
    this.multipleMedia = this.album.attributes.media.data.length > 1;
    this.containsImage = this.album.attributes.media.data.some(media => media.attributes.mime.includes('image'));
    this.containsVideo = this.album.attributes.media.data.some(media => media.attributes.mime.includes('video'));
  }
}
