import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  enterSearchValue: string = '';
  searchText: string = '';

  constructor(private searchTextService: DataService) { }

  searchCoffee(term: string) {
    console.log(term)
  }

  ngOnInit(): void {
    this.searchTextService.currenSearchText.subscribe(text => this.searchText = text)
  }

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enterSearchValue);
    this.searchTextService.updateSearchText(this.enterSearchValue);
  }

}
