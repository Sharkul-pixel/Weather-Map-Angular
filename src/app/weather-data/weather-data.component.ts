import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-data',
  standalone: false,
  templateUrl: './weather-data.component.html',
  styleUrl: './weather-data.component.css'
})
export class WeatherDataComponent implements OnInit {

  @Input() feels_like: string = '';
  @Input() humidity: string = '';
  @Input() wind_speed: string = '';

  ngOnInit() {
  }
    
  


  

}
