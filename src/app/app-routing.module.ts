import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';

const routes: Routes = [
  { path: 'coffee/:id', component: CoffeeDetailComponent},
  { path: 'coffeelist', component: CoffeeListComponent},
  { path: '', redirectTo: '/coffeelist', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
