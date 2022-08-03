import {Component, Input, OnInit} from '@angular/core';
import {Album} from "../../data-types/Album";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'polecamman-album-preview',
  templateUrl: './album-preview.component.html',
  styleUrls: ['./album-preview.component.scss'],
})
export class AlbumPreviewComponent implements OnInit {
  @Input()
  album !: Album;

  serverURL = environment.serverURL;

  constructor() {}

  ngOnInit(): void {
    this.serverURL = environment.serverURL;
  }
}
