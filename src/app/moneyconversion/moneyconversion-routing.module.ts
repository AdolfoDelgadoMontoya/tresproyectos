import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoneyconversionPage } from './moneyconversion.page';

const routes: Routes = [
  {
    path: '',
    component: MoneyconversionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoneyconversionPageRoutingModule {}
