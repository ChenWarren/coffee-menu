import { Component } from '@angular/core';
import { Coffee } from './coffee';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffee-menu';
  coffeeList: Coffee[] = [];

  constructor(private dataService: ConfigService){}

  ngOnInit(){
    this.dataService.getData().subscribe((res)=>{
      this.coffeeList = res.data;
    })
  }
}
