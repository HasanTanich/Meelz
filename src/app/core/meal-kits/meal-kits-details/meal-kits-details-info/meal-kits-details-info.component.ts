import {Component, Input, OnInit} from '@angular/core';
import {MealKit} from "../../../../shared/models/mealkit.model";

@Component({
  selector: 'app-meal-kits-details-info',
  templateUrl: './meal-kits-details-info.component.html',
  styleUrls: ['./meal-kits-details-info.component.css']
})
export class MealKitsDetailsInfoComponent implements OnInit {
  @Input() masterClass;
  menuDataArray: MealKit;

  constructor() { }

  ngOnInit(): void {
    this.masterClass.subscribe(data => {
      this.menuDataArray = data;
    });
  }

}
