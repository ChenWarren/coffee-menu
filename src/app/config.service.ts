import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Coffee } from './coffee';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  private configUrl = 'https://smooth-imaginary-anemone.glitch.me/';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse){
    return throwError(()=> new Error('Error. Pls try again later.'));
  }

  getCoffeeDetail(id:string): Observable<Coffee> {
    const URL = this.configUrl+`detail/${id}`;
    return this.http.get<Coffee>(URL).pipe(catchError(this.handleError));
  }

  getData(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.configUrl)
    .pipe(catchError(this.handleError));
  }
}


