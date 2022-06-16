import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {

  @Input() coffee? : Coffee;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
