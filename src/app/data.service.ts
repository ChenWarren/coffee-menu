import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private searchText = new BehaviorSubject<string>('');
  currenSearchText = this.searchText.asObservable();

  constructor() { }

  updateSearchText(text: string) {
    this.searchText.next(text);
  }
}
