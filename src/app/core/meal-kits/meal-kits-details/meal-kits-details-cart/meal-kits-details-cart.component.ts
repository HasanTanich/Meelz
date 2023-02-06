import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TrendingMenuCartService } from 'src/app/core/services/trending-menu-cart.service';
import { mealKitVM } from 'src/app/shared/models/MealKitsVM.model';
import {MealKit} from "../../../../shared/models/mealkit.model";

@Component({
  selector: 'app-meal-kits-details-cart',
  templateUrl: './meal-kits-details-cart.component.html',
  styleUrls: ['./meal-kits-details-cart.component.css']
})
export class MealKitsDetailsCartComponent implements OnInit {
  @Input() masterClass;
  menuDataArray: MealKit;
  SingleMealKit:mealKitVM;

  constructor(private cartService:TrendingMenuCartService) { }

  ngOnInit(): void {
    this.masterClass.subscribe(data => {
      this.menuDataArray = data;
      this.SingleMealKit=data;
      console.log(this.menuDataArray);
      console.log(this.SingleMealKit.id + "single meal kit");
    })

  }

  @Output() newItemEvent = new EventEmitter<number>();
  @Output() oldItemEvent = new EventEmitter<number>();
  
  addNewItem(value: number) {
    this.newItemEvent.emit(value);
  }
  oldNewItem(value: number) {
    this.oldItemEvent.emit(value);
  }
  addToCart()
  {
    this.cartService.addToLocalStorage(this.SingleMealKit);
    this.addNewItem(1);
  }

}
