import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffeeList: Coffee[] = [];

  constructor(private dataService: ConfigService){}

  ngOnInit(){
    this.dataService.getData().subscribe((res)=>{
      this.coffeeList = res.data;
    })
  }

}
