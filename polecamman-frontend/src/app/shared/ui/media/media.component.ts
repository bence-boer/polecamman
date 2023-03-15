import { Component, Input, OnChanges } from '@angular/core';
import { MediaElement } from "../../utils/MediaElement";
import { environment } from "../../../../environments/environment";
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import { UiMediaLoaderDirective } from "../../utils/ui-media-loader.directive";

@Component({
  standalone: true,
  selector: 'app-media',
  templateUrl: './media.component.html',
  imports: [
    NgIf,
    UiMediaLoaderDirective,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnChanges {
  @Input() media!: MediaElement;
  type = "image";
  serverURL = environment.serverURL;

  ngOnChanges() {
    if (!this.media) return;
    this.type = MediaComponent.mediaType(this.media);
  }

  static mediaType(media: MediaElement): string {
    if (media.mime.includes("image")) {
      return "image";
    }
    else if (media.mime.includes("video")) {
      return "video";
    }
    return "unknown";
  }
}
