import {Component, OnInit} from '@angular/core';
import {Gear} from "../../data-types/Gear";
import {GearService} from "../../services/gear.service";
import {Unsubscriber} from "../../utilities/unsubscriber";

@Component({
  selector: 'gear-page',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.scss'],
})
export class GearComponent extends Unsubscriber implements OnInit {
  gear ?: Gear;

  constructor(private gearService: GearService) {
    super();
  }

  ngOnInit(): void {
    this.subscription = this.gearService.getGear().subscribe((gear) => {
        this.gear = gear;
      }
    );
  }
}
