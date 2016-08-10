import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { DisplayRestaurantComponent }  from './display-restaurant.component';

@Component ({
  selector: 'list-restaurant',
  inputs: ['listRestaurant'],
  outputs: ['onRestaurantSelect'],
  directives: [DisplayRestaurantComponent],
  template: `
  <display-restaurant *ngFor="#restaurant of listRestaurant"
  (click)="restaurantClicked(restaurant)"
  [class.selected]="restaurant === selectedRestaurant"
  [restaurant]="restaurant">
  </display-restaurant>
  `
})

export class ListRestaurantComponent {
  public listRestaurant: Restaurant[];
  public onRestaurantSelect: EventEmitter<Restaurant>;
  public selectedRestaurant: Restaurant;
  constructor() {
    this.onRestaurantSelect = new EventEmitter();
  }

  restaurantClicked(clickedRestaurant: Restaurant): void {
    this.selectedRestaurant = clickedRestaurant;
    this.onRestaurantSelect.emit(clickedRestaurant);
  }
}
