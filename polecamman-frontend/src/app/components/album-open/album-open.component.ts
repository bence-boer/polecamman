import {Component, Input, OnInit} from '@angular/core';
import {Album} from "../../data-types/Album";

@Component({
  selector: 'app-album-open',
  templateUrl: './album-open.component.html',
  styleUrls: ['./album-open.component.scss']
})
export class AlbumOpenComponent implements OnInit {
  @Input()
  album !: Album;

  constructor() { }

  ngOnInit(): void {
  }

}
