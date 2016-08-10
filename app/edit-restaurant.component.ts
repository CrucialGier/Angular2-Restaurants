import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'edit-restaurant',
  inputs: ['restaurant'],
  template: `
  <div class="col-sm-5 edit-restaurant">
  <h3 (click)='detailClicked("name")'>{{ restaurant.name }}</h3>
  <input [(ngModel)]="restaurant.name" *ngIf="selectedDetail === 'name'"/>
  <p (click)='detailClicked("specialty")'>{{ restaurant.specialty }}</p>
  <input [(ngModel)]="restaurant.specialty" *ngIf="selectedDetail === 'specialty'"/>
  <p (click)='detailClicked("location")'>{{ restaurant.location }}</p>
  <input [(ngModel)]="restaurant.location" *ngIf="selectedDetail === 'location'"/>
  <h5 (click)='doneEditing()'>Done editing</h5>
  </div>
  `
})

export class EditRestaurantComponent {
  public restaurant: Restaurant;
  public selectedDetail: string;
  detailClicked(clickedDetail: string) {
    this.selectedDetail = clickedDetail;
  }
  doneEditing(){
    this.selectedDetail = "done";
  }
}
