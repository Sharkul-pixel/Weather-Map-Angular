import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: false,
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  temp: string = '';
  feels_like: string = '';
  city: string = 'Paterson';
  humidity: string = '';
  wind_speed: string = '';
  weatherImg: string = '';

  imagePath: string = '';
  
  ngOnInit() {
    // lifecycle hook that is called after the component is initialized
    this.getWeather();
  }

  
  constructor(private weatherService: WeatherService) {}

  search(cityName: string) {
    this.city = cityName;
    this.getWeather();
  }
  

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe((data: any) => {
      console.log(data); // log the data received from the API
      this.temp = Math.round(data.main.temp).toString();
      this.feels_like = Math.round(data.main.feels_like).toString();
      this.humidity = Math.round(data.main.humidity).toString();
      this.wind_speed = Math.round(data.wind.speed).toString();
      this.weatherImg = data.weather[0].main;
      
      this.imagePath = this.weatherImg ? 
        `../images/${this.weatherImg.toLowerCase()}.png` : "../images/rain.png" ;
    });


    
  
  }

}
