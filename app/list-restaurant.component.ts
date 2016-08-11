import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { DisplayRestaurantComponent }  from './display-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant.component';
import { NewRestaurantComponent } from './new-restaurant.component';
import { SpecialtyPipe } from './specialty.pipe';


@Component ({
  selector: 'list-restaurant',
  inputs: ['listRestaurant'],
  outputs: ['onRestaurantSelect'],
  directives: [DisplayRestaurantComponent, EditRestaurantComponent, NewRestaurantComponent],
  pipes: [SpecialtyPipe],
  template: `
  <div class="col-sm-4">
  <select (change)="onChange($event.target.value)">
    <option *ngFor='#currentRestaurant of listRestaurant'>{{ currentRestaurant.specialty }}</option>
    <option value="all" selected="selected">All restaurant</option>
  </select>
  <display-restaurant *ngFor="#restaurant of listRestaurant | specialty:chosenSpecialty"
  (click)="restaurantClicked(restaurant)"
  [class.selected]="restaurant === selectedRestaurant"
  [restaurant]="restaurant"
  >
  </display-restaurant>
  </div>
  <edit-restaurant *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant" (onDelete)='deleteRestaurant($event)'>
  </edit-restaurant>
  <new-restaurant (onSubmitNewRestaurant)='addRestaurant($event)'></new-restaurant>
  `
})

export class ListRestaurantComponent {
  public listRestaurant: Restaurant[];
  public onRestaurantSelect: EventEmitter<Restaurant>;
  public selectedRestaurant: Restaurant;
  public chosenSpecialty: string = "all";
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
  deleteRestaurant(selectedRestaurant: Restaurant){
    for(var i = 0; i < this.listRestaurant.length; i++) {
      if (selectedRestaurant.name === this.listRestaurant[i].name && selectedRestaurant.location === this.listRestaurant[i].location) {
        this.listRestaurant.splice(i, 1);
        this.selectedRestaurant = null;
      }
    }
  }
  onChange(specialtyFromMenu){
    this.chosenSpecialty = specialtyFromMenu;
  }
}
