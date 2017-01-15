import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Stat } from '../models/stat.interface';
import { TeslaBatteryService } from '../tesla-battery/tesla-battery.service';

@Component({
  selector: 'app-tesla-battery',
  templateUrl: './tesla-battery.component.html',
  styleUrls: ['./tesla-battery.component.scss']
})
export class TeslaBatteryComponent implements OnInit {

  title: string = 'Range Per Charge';
  dataset: any;
  stats: Stat[];
  tesla: FormGroup;

  private carModels: Array<String> = ['60', '60D', '75', '75D', '90D', 'P100D'];

  constructor(
    public fb: FormBuilder,
    private teslaBatteryService: TeslaBatteryService
    ) { }

  ngOnInit() {

    this.dataset = this.teslaBatteryService.getModelData();

    this.tesla = this.fb.group({
      config: this.fb.group({
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19
      })
    });

    this.stats = this.calculateStats(this.carModels, this.tesla.controls['config'].value);

  }

  private calculateStats(data, value): Stat[]  {
  return data.map(model => {
    const { speed, temperature, climate, wheels } = value;
    const miles = this.dataset[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
    return {
      model,
      miles
    };
  });
}

}
