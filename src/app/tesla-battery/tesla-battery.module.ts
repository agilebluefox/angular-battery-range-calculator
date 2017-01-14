import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TeslaBatteryComponent } from './tesla-battery.component';

// services
import { TeslaBatteryService } from './tesla-battery.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    TeslaBatteryComponent
  ],
  providers: [
    TeslaBatteryService
  ],
  exports: [
    // export so the root module can access
    TeslaBatteryComponent
  ]
})
export class TeslaBatteryModule { }
