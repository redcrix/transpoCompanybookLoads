import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'location-select', loadChildren: './location-select/location-select.module#LocationSelectPageModule' },
  { path: 'truck-driver-registeration', loadChildren: './truck-driver-registeration/truck-driver-registeration.module#TruckDriverRegisterationPageModule' },
  { path: 'user-registeration', loadChildren: './user-registeration/user-registeration.module#UserRegisterationPageModule' },
  { path: 'post-load', loadChildren: './post-load/post-load.module#PostLoadPageModule' },
  { path: 'find-trucks', loadChildren: './find-trucks/find-trucks.module#FindTrucksPageModule' },
  { path: 'find-truck-driver', loadChildren: './find-truck-driver/find-truck-driver.module#FindTruckDriverPageModule' },
  { path: 'find-load', loadChildren: './find-load/find-load.module#FindLoadPageModule' },
  { path: 'get-estimates', loadChildren: './get-estimates/get-estimates.module#GetEstimatesPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'driver-vacancy', loadChildren: './driver-vacancy/driver-vacancy.module#DriverVacancyPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
