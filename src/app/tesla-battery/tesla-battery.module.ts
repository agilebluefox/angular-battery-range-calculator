import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TeslaBatteryComponent } from './tesla-battery.component';
import { TeslaCarComponent } from './tesla-car/tesla-car.component';
import { TeslaStatsComponent } from './tesla-stats/tesla-stats.component';

// services
import { TeslaBatteryService } from './tesla-battery.service';
import { TeslaCounterComponent } from './tesla-counter/tesla-counter.component';
import { TeslaClimateComponent } from './tesla-climate/tesla-climate.component';
import { TeslaWheelsComponent } from './tesla-wheels/tesla-wheels.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    TeslaBatteryComponent,
    TeslaCarComponent,
    TeslaStatsComponent,
    TeslaCounterComponent,
    TeslaClimateComponent,
    TeslaWheelsComponent
  ],
  providers: [
    TeslaBatteryService
  ],
  exports: [
    // export so the root module can access
    TeslaBatteryComponent,
    TeslaStatsComponent
  ]
})
export class TeslaBatteryModule { }
