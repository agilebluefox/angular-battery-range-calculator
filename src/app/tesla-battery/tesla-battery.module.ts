import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// services
import { TeslaBatteryService } from './tesla-battery.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [],
  providers: [
    TeslaBatteryService
  ]
})
export class TeslaBatteryModule { }
