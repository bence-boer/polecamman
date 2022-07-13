import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../../../services/album.service";
import {Album} from "../../../Album";

@Component({
  selector: 'polecamman-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  albums: Album[] = [];
  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAll().subscribe((albums) => this.albums = albums);

  }
}
