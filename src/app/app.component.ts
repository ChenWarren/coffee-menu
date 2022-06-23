import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffee-menu';
  searchText: string = '';

  onSearchTextEntered(searchText: string) {
    this.searchText = searchText;
  }
}
