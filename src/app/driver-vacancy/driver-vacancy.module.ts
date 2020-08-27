import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DriverVacancyPage } from './driver-vacancy.page';

const routes: Routes = [
  {
    path: '',
    component: DriverVacancyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DriverVacancyPage]
})
export class DriverVacancyPageModule {}
