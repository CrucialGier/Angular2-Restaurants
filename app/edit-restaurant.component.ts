import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'edit-restaurant',
  inputs: ['restaurant'],
  outputs: ['onDelete'],
  template: `
  <div class="col-sm-5 edit-restaurant">
    <h3 (click)='detailClicked("name")'>{{ restaurant.name }}</h3>
    <input [(ngModel)]="restaurant.name" *ngIf="selectedDetail === 'name'"/>
    <p (click)='detailClicked("specialty")'>{{ restaurant.specialty }}</p>
    <input [(ngModel)]="restaurant.specialty" *ngIf="selectedDetail === 'specialty'"/>
    <p (click)='detailClicked("location")'>{{ restaurant.location }}</p>
    <input [(ngModel)]="restaurant.location" *ngIf="selectedDetail === 'location'"/>
    <p>{{ avgRating }}</p>
    <div class="feedback">
      <label for="rating">Rate this restaurant</label>
      <select id="rating" #newRating>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <label for="wait">How long did you wait?</label>
      <input id="wait"/>
      <button (click)="submitRating(newRating)">Submit Rating</button>
    </div>
    <h5 (click)='doneEditing()'>Done editing</h5><br>
    <h5 class="delete" (click)='chooseDelete(restaurant)'>Delete Restaurant...forever</h5>
  </div>
  `
})

export class EditRestaurantComponent {
  public restaurant: Restaurant;
  public selectedDetail: string;
  public onDelete: EventEmitter<Restaurant>;
  public avgRating = 0;
  constructor(){
    this.onDelete = new EventEmitter();
  }
  detailClicked(clickedDetail: string) {
    this.selectedDetail = clickedDetail;
  }
  doneEditing(){
    this.selectedDetail = "done";
  }
  chooseDelete(selectedRestaurant: Restaurant): void {
    this.onDelete.emit(selectedRestaurant);
  }
  submitRating(newRating: HTMLInputElement) {
    this.restaurant.rating.push(parseInt(newRating.value));
    var tempRating: number = 0;
    for(var currentRating of this.restaurant.rating){
      tempRating += currentRating;
    }
    this.avgRating = tempRating / this.restaurant.rating.length;
  }
}
