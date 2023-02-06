import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DataService} from "../../services/data.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MealKit} from "../../../shared/models/mealkit.model";
import { TrendingMenuCartService } from '../../services/trending-menu-cart.service';

@Component({
  selector: 'app-meal-kits-details',
  templateUrl: './meal-kits-details.component.html',
  styleUrls: ['./meal-kits-details.component.css']
})
export class MealKitsDetailsComponent implements OnInit {
  masterClassData: Observable<any>;
  mealKitData;
  id;
  mealKitArray: MealKit;
  slides = [
    {
      url: '../assets/img/img_18.png'
    },
    {
      url: '../assets/img/img_9.png'
    }
  ]

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router,private cartService:TrendingMenuCartService) { }

  quantity:number;

  ngOnInit(): void {
    this.quantity=this.cartService.getAllLocalStorage();

    this.router.navigate(['ingredients'], { relativeTo: this.route });
    this.masterClassData = this.dataService.getAllMasterClasses1();
    window.scroll(0,0);
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.mealKitData = this.dataService.getSingleMealKit(params.id);
    });
    this.mealKitData.subscribe(data => {
      this.mealKitArray = data;
    })
  }
  addItem(newItem: number) {
    this.quantity=this.cartService.getAllLocalStorage();
    console.log(" add item funkc ->" + this.quantity)
  }
  removeItem(newItem: number) {
    this.quantity=this.cartService.getAllLocalStorage();
    console.log(" remove item funkc ->" + this.quantity)

  }

}
