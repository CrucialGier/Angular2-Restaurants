import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { DisplayRestaurantComponent }  from './display-restaurant.component';

@Component ({
  selector: 'list-restaurant',
  inputs: ['restaurantList'],
  directives: [DisplayRestaurantComponent],
  template: `
  <display-restaurant *ngFor="#restaurant of restaurantList"
  [restaurant]="restaurant"
  ></display-restaurant>
  `
})

export class ListRestaurantComponent {
  public listRestaurant: Restaurant[];
}
