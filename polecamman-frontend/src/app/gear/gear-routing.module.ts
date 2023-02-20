import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GearPage} from "./gear.page";

const routes: Routes = [
  {
    path: '',
    title: $localize`Gear | Polecamman`,
    component: GearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GearRoutingModule { }
