import {Component} from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html'
})

export class ForecastComponent {

  windSpeedKnots: number = 20;
  instability: number = 1.1;

  isRaining: string = 'sunny';

  tabClasse: Array<any> = [
    {nom : 'Cedric', age : 20},
    {nom : 'Julien', age : 30},
    {nom : 'Julie', age : 20},
    {nom : 'Jean', age : 19}
  ];

  booButtonDisabled: boolean = false;

  updateWeather(){
    this.windSpeedKnots += 1;
  }

}

