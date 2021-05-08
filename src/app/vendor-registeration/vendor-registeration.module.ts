import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { VendorRegisterationPage } from "./vendor-registeration.page";

const routes: Routes = [
  {
    path: "",
    component: VendorRegisterationPage,
  },
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [VendorRegisterationPage],
})
export class VendorRegisterationPageModule {}
