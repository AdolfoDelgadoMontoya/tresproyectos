import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'moneyconversion',
    loadChildren: () => import('./moneyconversion/moneyconversion.module').then( m => m.MoneyconversionPageModule)
  },
  {
    path: 'weatherforecast',
    loadChildren: () => import('./weatherforecast/weatherforecast.module').then( m => m.WeatherforecastPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
