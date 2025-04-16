import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule to make HTTP requests

import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeatherComponent,
    WeatherDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // Import FormsModule to use ngModel for two-way data binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


