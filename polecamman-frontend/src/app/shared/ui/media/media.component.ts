import { Component, Input } from '@angular/core';
import { MediaElement } from "../../utils/MediaElement";
import { environment } from "../../../../environments/environment";
import { NgIf } from "@angular/common";
import { UiMediaLoaderDirective } from "../../utils/ui-media-loader.directive";

@Component({
  standalone: true,
  selector: 'app-media',
  templateUrl: './media.component.html',
  imports: [
    NgIf,
    UiMediaLoaderDirective
  ],
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {
  @Input() media!: MediaElement;
  serverURL = environment.serverURL;
  isImage(media: MediaElement) {
    return media.mime.includes("image");
  }

  isVideo(media: MediaElement) {
    return media.mime.includes("video");
  }
}
