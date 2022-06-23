import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {

  @Input() coffeeDetail?: Coffee;

  constructor(
    private route: ActivatedRoute,
    private detailService: ConfigService,
  ) { }

  getCoffee(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.detailService.getCoffeeDetail(id).subscribe(coffee => this.coffeeDetail = coffee);
  }

  ngOnInit(): void {
    this.getCoffee();
  }

}
