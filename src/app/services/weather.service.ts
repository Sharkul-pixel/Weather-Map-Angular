import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  API_KEY = environment.apiKey;
  BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";

  constructor(private http: HttpClient) { } // inject HttpClient service instance

  getWeather(city: any): Observable<any> {
    const url = `${this.BASE_URL}q=${city}&units=imperial&appid=${this.API_KEY}`;
    return this.http.get(url).pipe(
      tap(_ => this.log(`fetched weather for city=${city}`)), // log the fetched data
      catchError(this.handleError<any>(`getWeather city=${city}`)) // handle errors
    );
  }
 
  log(message: string) { // log messages to the console
    console.log(`WeatherService: ${message}`); 
  }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => { // This function returns another function that takes an error object and returns an Observable with a fallback value
  
        // send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  

  
}






/*

  
  getHeroes(): Observable<Hero[]> {  // pipe() waits for http.get<Hero[]>(this.heroesUrl) to emit data, and only then does it execute the operators inside it (tap(), catchError()) in order
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(       // .pipe() processes the response (logging, error handling, etc.).
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }


*/