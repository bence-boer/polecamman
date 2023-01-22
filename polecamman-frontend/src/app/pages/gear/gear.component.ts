import {Component, OnInit} from '@angular/core';
import {Gear} from "../../data-types/Gear";
import {GearService} from "../../services/gear.service";

@Component({
  selector: 'gear-page',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.scss'],
})
export class GearComponent implements OnInit {
  gear ?: Gear;

  constructor(private gearService: GearService) {
  }

  ngOnInit(): void {
    this.gearService.getGear().subscribe((gear) => {
        this.gear = gear;
      }
    );
  }
}
