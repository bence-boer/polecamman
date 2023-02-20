import {Component, Input} from '@angular/core';
import {MediaElement} from "../../../data-types/MediaElement";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent {
  @Input() images: MediaElement[] = [];
  serverURL = environment.serverURL;
}
