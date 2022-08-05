import {Component, Input, OnInit} from '@angular/core';
import {Album} from "../../../data-types/Album";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {AlbumService} from "../../../services/album.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-album-open',
  templateUrl: './album-open.component.html',
  styleUrls: ['./album-open.component.scss']
})
export class AlbumOpenComponent implements OnInit {
  album ?: Album;
  serverURL = environment.serverURL;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.albumService.getAlbumByID(+id!).subscribe((album) => {
      this.album = album;
    });
  }
}
