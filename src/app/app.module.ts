import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TeslaBatteryModule } from './tesla-battery/tesla-battery.module';

import { AppComponent } from './app.component';
import { TeslaBatteryComponent } from './tesla-battery/tesla-battery.component';

@NgModule({
  declarations: [
    AppComponent,
    TeslaBatteryComponent
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
