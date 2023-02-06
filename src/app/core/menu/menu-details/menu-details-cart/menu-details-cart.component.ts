import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TrendingMenuCartService } from 'src/app/core/services/trending-menu-cart.service';
import { trendingMenuVM } from 'src/app/shared/models/trendingMenuVM.model';
import {MealKit} from "../../../../shared/models/mealkit.model";
import {Menu} from "../../../../shared/models/menu.model";

@Component({
  selector: 'app-menu-details-cart',
  templateUrl: './menu-details-cart.component.html',
  styleUrls: ['./menu-details-cart.component.css']
})
export class MenuDetailsCartComponent implements OnInit {
  @Input() menuData;
  menuArray: trendingMenuVM;


  constructor(private cartService:TrendingMenuCartService) { }

  ngOnInit(): void {
    this.menuData.subscribe(data => {
      this.menuArray = data;
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
    this.cartService.addToLocalStorage(this.menuArray);
    this.addNewItem(1);
  }

}
