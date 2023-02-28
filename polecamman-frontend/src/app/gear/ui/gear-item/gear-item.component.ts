import { Component, Input } from '@angular/core';
import { GearItem } from "../../utils/GearItem";
import { MediaElement } from "../../../shared/utils/MediaElement";

@Component({
  selector: 'gear-item',
  templateUrl: './gear-item.component.html',
  styleUrls: ['./gear-item.component.scss']
})
export class GearItemComponent {
  @Input() gearItem!: GearItem;
  media: MediaElement;

  constructor() {
    this.media = this.gearItem.attributes.media.data[0].attributes;
  }
}
