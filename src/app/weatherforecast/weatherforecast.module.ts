import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherforecastPageRoutingModule } from './weatherforecast-routing.module';

import { WeatherforecastPage } from './weatherforecast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherforecastPageRoutingModule
  ],
  declarations: [WeatherforecastPage]
})
export class WeatherforecastPageModule {}
