import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from '../coffee';

@Component({
  selector: 'app-coffee-item',
  templateUrl: './coffee-item.component.html',
  styleUrls: ['./coffee-item.component.css']
})
export class CoffeeItemComponent implements OnInit {

  @Input() coffee? : Coffee;

  constructor() { }

  getDetail(id: number){
    console.log('detail '+id)
  }

  ngOnInit(): void {
  }

}
