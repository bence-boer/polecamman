import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../../services/album.service";
import {Album} from "../../data-types/Album";

@Component({
  selector: 'gallery-page',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  albums: Album[] = [];
  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe((albums) => {
      this.albums = albums.reverse();
    });
  }
}
