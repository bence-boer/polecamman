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

  serverURL = environment.serverURL;

  constructor() {}

  ngOnInit(): void {
    this.serverURL = environment.serverURL;
    this.thumbnail = this.album.attributes.media.data[0].attributes;
  }
}
