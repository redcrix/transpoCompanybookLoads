import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { TruckDriverRegisterationPage } from "./truck-driver-registeration.page";

const routes: Routes = [
  {
    path: "",
    component: TruckDriverRegisterationPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  declarations: [TruckDriverRegisterationPage],
})
export class TruckDriverRegisterationPageModule {}
