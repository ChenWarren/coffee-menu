import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from '../coffee';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  @Input() coffees: Coffee[] = [];

  constructor() { }

  searchCoffee(searchText: string){
    console.log(searchText)
  }

  ngOnInit(): void {
  }

}
