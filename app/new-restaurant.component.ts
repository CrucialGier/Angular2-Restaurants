import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component ({
  selector: 'new-restaurant',
  outputs: ['onSubmitNewRestaurant'],
  template: `
    <div class="col-sm-3 input-lg restaurant-form">
      <h2>Add a Restaurant</h2>
      <label for="name">Name</label>
      <input id="name" #name/>
      <label for="location">Location</label>
      <input id="location" #location/>
      <label for="specialty">Specialty</label>
      <input id="specialty" #specialty/>
      <label for="price">Price</label>
      <input id="price" #price/>
      <button (click)="createRestaurant(name, location, specialty, price)">Add</button>
    </div>
  `
})

export class NewRestaurantComponent {
  public newRestaurant: Restaurant;
  public onSubmitNewRestaurant: EventEmitter<Restaurant>;
  constructor(){
    this.onSubmitNewRestaurant = new EventEmitter();
  }

  createRestaurant(name: HTMLInputElement, location: HTMLInputElement, specialty: HTMLInputElement, price: HTMLInputElement) {
    this.newRestaurant = new Restaurant(name.value, location.value, specialty.value, price.value)
    this.onSubmitNewRestaurant.emit(this.newRestaurant);
    name.value = "";
    location.value = "";
    specialty.value = "";
    price.value = "";
  }
}
