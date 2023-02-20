import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GearPage} from "./gear.page";
import {SharedModule} from "../shared/shared.module";
import {GearItemComponent} from './ui/gear-item/gear-item.component';
import {GearRoutingModule} from "./gear-routing.module";

@NgModule({
  declarations: [
    GearPage,
    GearItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GearRoutingModule
  ]
})
export class GearModule {
}
