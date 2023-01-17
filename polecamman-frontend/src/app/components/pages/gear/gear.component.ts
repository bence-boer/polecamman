import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Gear} from "../../../data-types/Gear";
import {GearService} from "../../../services/gear.service";

@Component({
  selector: 'gear-page',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.scss'],
})
export class GearComponent implements OnInit {
  gear ?: Gear;
  @ViewChild('content', {static: true}) content !: ElementRef<HTMLElement>;

  constructor(private gearService: GearService) {}

  ngOnInit(): void {
    /*this.gearService.getGear().subscribe((gear) => {
      this.content.nativeElement.innerHTML = gear.attributes.content;
    }
    );*/
  }
}
