import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DataService} from "../../../services/data.service";
import {ActivatedRoute, Params} from "@angular/router";
import {MealKit} from "../../../../shared/models/mealkit.model";

@Component({
  selector: 'app-meal-kits-details-required',
  templateUrl: './meal-kits-details-required.component.html',
  styleUrls: ['./meal-kits-details-required.component.css']
})
export class MealKitsDetailsRequiredComponent implements OnInit {
  mealKitData;
  id;
  mealKitArray: MealKit;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = params.id;
      this.mealKitData = this.dataService.getSingleMealKit(params.id);
    });
    this.mealKitData.subscribe(data => {
      this.mealKitArray = data;
    });
  }
}
