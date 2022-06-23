import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { ConfigService } from '../config.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  searchText: string = '';
  coffeeList: Coffee[] = [];
  filteredCoffeeList: Coffee[] = [];

  constructor(
    private dataService: ConfigService,
    private searchTextService: DataService,
  ){}

  ngOnInit(){
    this.dataService.getData().subscribe((res)=>{
      this.coffeeList = res;
    });
    this.searchTextService.currenSearchText.subscribe(text => this.searchText=text);
  }

}
