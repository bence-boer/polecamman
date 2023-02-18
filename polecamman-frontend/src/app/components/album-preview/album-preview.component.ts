import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Album} from "../../data-types/Album";
import {environment} from "../../../environments/environment";
import {MediaElement, MediaFormat} from "../../data-types/MediaElement";

@Component({
  selector: 'album-preview',
  templateUrl: './album-preview.component.html',
  styleUrls: ['./album-preview.component.scss'],
})
export class AlbumPreviewComponent implements AfterViewInit {
  @Input() album !: Album | null;
  albumFirstMedia !: MediaElement;
  thumbnail !: MediaFormat;
  multipleMedia = false;
  containsImage = false;
  containsVideo = false;

  @ViewChild("thumbnail_image") thumbnailImage!: ElementRef;
  thumbanilLoaded = false;

  serverURL = environment.serverURL;

  ngOnChanges(){
    if(!this.album) return;
    if (!this.album.attributes.media.data?.length) return;
    this.albumFirstMedia = this.album.attributes.media.data[0].attributes;
    this.thumbnail = this.albumFirstMedia.formats?.large;
    this.multipleMedia = this.album.attributes.media.data.length > 1;
    this.containsImage = this.album.attributes.media.data.some(media => media.attributes.mime.includes('image'));
    this.containsVideo = this.album.attributes.media.data.some(media => media.attributes.mime.includes('video'));
  }

  ngAfterViewInit() {
    window!.addEventListener("load", () => {
      this.thumbanilLoaded = this.thumbnailImage.nativeElement.complete;
    });
  }
}
