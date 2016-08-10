import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'display-restaurant',
  inputs: ['restaurant'],
  template: `
    <h4>{{ restaurant.name }}</h4>
  `
})

export class DisplayRestaurantComponent {
  public restaurant: Restaurant;
}
