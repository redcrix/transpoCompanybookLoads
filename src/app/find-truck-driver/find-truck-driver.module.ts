import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FindTruckDriverPage } from './find-truck-driver.page';

const routes: Routes = [
  {
    path: '',
    component: FindTruckDriverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FindTruckDriverPage]
})
export class FindTruckDriverPageModule {}
