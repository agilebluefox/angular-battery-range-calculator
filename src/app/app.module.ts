import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TeslaBatteryModule } from './tesla-battery/tesla-battery.module';

import { AppComponent } from './app.component';
import { TeslaStatsComponent } from './tesla-stats/tesla-stats.component';
// import { TeslaCarComponent } from './tesla-car/tesla-car.component';


@NgModule({
  declarations: [
    AppComponent,
    TeslaStatsComponent
    // TeslaCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TeslaBatteryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
