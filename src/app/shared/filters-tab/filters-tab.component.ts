import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface OptionSelect {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filters-tab',
  templateUrl: './filters-tab.component.html',
  styleUrls: ['./filters-tab.component.css']
})
export class FiltersTab implements OnInit {

  @Output() reverseRating = new EventEmitter<boolean>(false);
  @Output() reversePrice = new EventEmitter<boolean>(false);
  @Output() reverseStyle = new EventEmitter<boolean>(false);
  @Output() reverseName = new EventEmitter<boolean>(false);
  @Output() reverseFamily = new EventEmitter<boolean>(false);
  @Output() reverseChef = new EventEmitter<boolean>(false);
  @Output() reverseSeats = new EventEmitter<boolean>(false);
  @Output() reverseDuration = new EventEmitter<boolean>(false);

  @Input() Rating: string;
  @Input() Price: string;
  @Input() Name: string;
  @Input() Family: string;
  @Input() Chef: string;
  @Input() Seats: string;
  @Input() Duration: string;
  @Input() RecipeView: boolean;
  @Input() chefDetails: boolean;

  @Input() chefPage: boolean;
  @Input() menuPage: boolean;
  @Input() mealKitsPage: boolean;
  @Input() chefTablePage: boolean;
  @Input() MasterClassesPage: boolean;

  options: OptionSelect[] = [
    { value: 'popularity-0', viewValue: 'Popular' },
    { value: 'date-1', viewValue: 'Date' },
    { value: 'price-2', viewValue: 'Price' }
  ];
  selectedOption = this.options[0].value;

  constructor() { }

  ngOnInit(): void {
  }

  sortRating() {
    this.reverseRating._isScalar = !this.reverseRating._isScalar;
    this.reverseRating.emit(this.reverseRating._isScalar);
  }

  sortPrice() {
    this.reversePrice._isScalar = !this.reversePrice._isScalar;
    this.reversePrice.emit(this.reversePrice._isScalar);
  }

  sortStyle() {
    this.reverseRating._isScalar = !this.reverseRating._isScalar;
    this.reverseRating.emit(this.reverseRating._isScalar);
  }

  sortChef() {
    this.reverseChef._isScalar = !this.reverseChef._isScalar;
    this.reverseChef.emit(this.reverseChef._isScalar);
  }
  sortName() {
    this.reverseName._isScalar = !this.reverseName._isScalar;
    this.reverseName.emit(this.reverseName._isScalar);
  }
  sortFamily() {
    this.reverseFamily._isScalar = !this.reverseFamily._isScalar;
    this.reverseFamily.emit(this.reverseFamily._isScalar);
  }
  sortSeats() {
    this.reverseSeats._isScalar = !this.reverseSeats._isScalar;
    this.reverseSeats.emit(this.reverseSeats._isScalar);
  }
  sortDuration() {
    this.reverseDuration._isScalar = !this.reverseDuration._isScalar;
    this.reverseDuration.emit(this.reverseDuration._isScalar);
  }

}
