import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeItemComponent } from './coffee-item/coffee-item.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './searchFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    CoffeeItemComponent,
    CoffeeDetailComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
