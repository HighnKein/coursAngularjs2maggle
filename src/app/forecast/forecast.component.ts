import {Component} from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html'
})

export class ForecastComponent {

  windSpeedKnots: number = 20;
  instability: number = 1.8;

  booButtonDisabled: boolean = false;

  updateWeather(){
    this.windSpeedKnots += 1;
  }

}

