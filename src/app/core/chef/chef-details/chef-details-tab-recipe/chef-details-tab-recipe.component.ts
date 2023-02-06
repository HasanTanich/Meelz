import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { DataService } from "../../../services/data.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-chef-details-tab-recipe',
  templateUrl: './chef-details-tab-recipe.component.html',
  styleUrls: ['./chef-details-tab-recipe.component.css']
})
export class ChefDetailsTabRecipeComponent implements OnInit {
  meelz;
  meelsobs: Observable<any> = this.dataService.getAllMeelz();

  chefRecipeRating: boolean;
  chefRecipePrice: boolean;
  chefRecipeName: boolean;

  id;
  allChefsData;
  allChefsDataArray: [];

  loaded = false;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.allChefsData = this.dataService.getTrendingMealKits();
    this.allChefsData = this.allChefsData.toPromise();
    console.log(this.allChefsData)
    await this.allChefsData.then(data => {
      console.log(data);
      this.allChefsDataArray = data.filter(data => {
        if (data.chef == this.id){
          console.log('prosao uslov')
          return data.chef === this.id;
        }
      this.loaded = true;
      });
      console.log(this.allChefsDataArray)
    })

    this.meelsobs.subscribe(meel => {
      this.meelz = meel;
    });
  }

  onChefRecipeSortRating(value: boolean) {
    this.chefRecipeRating = value;
  }
  onChefRecipeSortPrice(value: boolean) {
    this.chefRecipePrice = value;
  }
  onChefRecipeSortName(value: boolean) {
    this.chefRecipeName = value;
  }

}
