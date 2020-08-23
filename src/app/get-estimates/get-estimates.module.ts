import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GetEstimatesPage } from './get-estimates.page';

const routes: Routes = [
  {
    path: '',
    component: GetEstimatesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GetEstimatesPage]
})
export class GetEstimatesPageModule {}
