import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoneyconversionPageRoutingModule } from './moneyconversion-routing.module';

import { MoneyconversionPage } from './moneyconversion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoneyconversionPageRoutingModule
  ],
  declarations: [MoneyconversionPage]
})
export class MoneyconversionPageModule {}
