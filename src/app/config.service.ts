import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  private configUrl = 'https://smooth-imaginary-anemone.glitch.me'

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse){
    return throwError(()=> new Error('Error. Pls try again later.'));
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.configUrl)
    .pipe(catchError(this.handleError));
  }
}
