import { Component, Input, OnChanges} from '@angular/core';
import { GearItem } from "../../utils/GearItem";
import { MediaElement } from "../../../shared/utils/MediaElement";
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'gear-item',
  templateUrl: './gear-item.component.html',
  styleUrls: ['./gear-item.component.scss']
})
export class GearItemComponent implements OnChanges{
  @Input() gearItem!: GearItem;
  media?: MediaElement;
  serverURL = environment.serverURL;

  ngOnChanges() {
    if (!this.gearItem) return;
    this.media = this.gearItem.attributes.media.data.attributes;
  }
}
