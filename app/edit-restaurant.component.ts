import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'edit-restaurant',
  inputs: ['restaurant'],
  template: `
  <div class="col-sm-5 edit-restaurant">
  <h3>{{ restaurant.name }}</h3>
  <p>{{ restaurant.specialty }}</p>
  <p>{{ restaurant.location }}</p>
  </div>
  `
})

export class EditRestaurantComponent {
  public restaurant: Restaurant;
}
