import {Component, Input, OnInit} from '@angular/core';
import {Album} from "../../data-types/Album";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {AlbumService} from "../../services/album.service";

@Component({
  selector: 'app-album-open',
  templateUrl: './album-open.component.html',
  styleUrls: ['./album-open.component.scss']
})
export class AlbumOpenComponent implements OnInit {
  album !: Album;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit(): void {
    let slug = this.route.snapshot.paramMap.get('slug');
    this.albumService.getBySlug(slug!).subscribe((album) => {
      this.album = album;
    });
  }

}
