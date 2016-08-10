import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { DisplayRestaurantComponent }  from './display-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant.component';
import { NewRestaurantComponent } from './new-restaurant.component';


@Component ({
  selector: 'list-restaurant',
  inputs: ['listRestaurant'],
  outputs: ['onRestaurantSelect'],
  directives: [DisplayRestaurantComponent, EditRestaurantComponent, NewRestaurantComponent],
  template: `
  <div class="col-sm-4">
  <display-restaurant *ngFor="#restaurant of listRestaurant"
  (click)="restaurantClicked(restaurant)"
  [class.selected]="restaurant === selectedRestaurant"
  [restaurant]="restaurant"
  >
  </display-restaurant>
  </div>
  <edit-restaurant *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant">
  </edit-restaurant>
  <new-restaurant (onSubmitNewRestaurant)='addRestaurant($event)'></new-restaurant>
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
  addRestaurant(newRestaurant: Restaurant): void {
    console.log(newRestaurant);
    this.listRestaurant.push(newRestaurant);
  }
}
