import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../../../services/album.service";
import {Album} from "../../../data-types/Album";

@Component({
  selector: 'polecamman-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  albums: Album[] = [];
  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAll().subscribe((albums) => {
      console.log(albums);
      this.albums = albums;
    });
  }
}
