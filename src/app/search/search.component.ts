import { Component, EventEmitter, Output } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { debounceTime, distinct, distinctUntilChanged, Subject, switchMap } from 'rxjs';

import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() search: EventEmitter<string> = new EventEmitter();
  private searchTerms = new Subject<string>();

  constructor(private weatherService: WeatherService) {}

  
  searchCity(city: string) : void{
    this.searchTerms.next(city.trim());
    // if (trimmedCity) {
    //   this.search.emit(trimmedCity);
    // }
  }
      
  ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300), // wait for 300ms pause in events
      distinctUntilChanged(), // ignore if next search term is same as previous
      switchMap((term: string) => this.weatherService.getWeather(term)) // switch to new observable each time the term changes
    ).subscribe(data => {
        console.log('Searched city name data:', data); // log the data received from the API
        this.search.emit(data.name); // emit the city name to the parent component
      }
    )
      
  }      
    


}
