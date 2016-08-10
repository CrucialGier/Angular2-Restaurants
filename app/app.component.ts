import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { ListRestaurantComponent } from './list-restaurant.component';

@Component({
  selector: 'restaurant-app',
  directives: [ListRestaurantComponent],
  template: `
  <div class="container">
  <h1>Hello, Portland</h1>
  <list-restaurant
  [restaurantList]="restaurants"
  >
  </list-restaurant>
  </div>
  `
})

export class AppComponent {
  public restaurants: Restaurant[];
  constructor(){
    this.restaurants = [
      new Restaurant("Bob's Burgers", "Right Here", "french burgers", "$"),
      new Restaurant("Salt and Straw", "NE Alberta", "dessert", "$$"),
      new Restaurant("Cameo Cafe", "by the golf", "breakfast", "$$")
    ];
  }
}
