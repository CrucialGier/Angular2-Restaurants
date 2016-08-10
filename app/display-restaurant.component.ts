import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'display-restaurant',
  inputs: ['restaurant'],
  template: `
    <h3>{{ restaurant.name }}</h3>
    <p>{{ restaurant.location }}</p>
    <p>{{ restaurant.specialty }}</p>
  `
})

export class DisplayRestaurantComponent {
  public restaurant: Restaurant;
}
