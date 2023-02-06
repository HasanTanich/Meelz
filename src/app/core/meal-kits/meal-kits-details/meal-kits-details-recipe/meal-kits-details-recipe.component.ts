import { Component, OnInit } from '@angular/core';
import {MealKit} from "../../../../shared/models/mealkit.model";
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-meal-kits-details-recipe',
  templateUrl: './meal-kits-details-recipe.component.html',
  styleUrls: ['./meal-kits-details-recipe.component.css']
})
export class MealKitsDetailsRecipeComponent implements OnInit {
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
