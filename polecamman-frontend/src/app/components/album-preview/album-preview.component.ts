import {Component, Input, OnInit} from '@angular/core';
import {Album} from "../../Album";

@Component({
  selector: 'polecamman-album-preview',
  templateUrl: './album-preview.component.html',
  styleUrls: ['./album-preview.component.scss'],
})
export class AlbumPreviewComponent implements OnInit {
  @Input()
  album !: Album;

  constructor() {}

  ngOnInit(): void {}
}
