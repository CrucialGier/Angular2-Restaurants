import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'display-restaurant',
  inputs: ['restaurant'],
  template: `
    <h3>{{ restaurant.name }}</h3>
  `
})

export class DisplayRestaurantComponent {
  public restaurant: Restaurant;
}
