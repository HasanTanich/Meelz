import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../../services/data.service";
import {Observable} from "rxjs";
import {MealKit} from "../../../shared/models/mealkit.model";
import {Menu} from "../../../shared/models/menu.model";
import { trendingMenuVM } from 'src/app/shared/models/trendingMenuVM.model';
import { TrendingMenuCartService } from '../../services/trending-menu-cart.service';


@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})

export class MenuDetailsComponent implements OnInit {

  @Input() quantity = 0;

  menuData;
  menuArray: Menu;
  id;
  slides = [
    {
      url: '../assets/img/img_18.png'
    },
    {
      url: '../assets/img/img_9.png'
    }
  ]
  constructor(private dataService: DataService, private route: ActivatedRoute,private cartService:TrendingMenuCartService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.menuData = this.dataService.getSingleMenu(params.id);
    });
    this.menuData.subscribe(data => {
      this.menuArray = data;
    })
  }
  addItem(newItem: number) {
    this.quantity = this.cartService.getAllLocalStorage();
    console.log(" add item funkc ->" + this.quantity)
  }
  removeItem(newItem: number) {
    this.quantity = this.cartService.getAllLocalStorage();
    console.log(" remove item funkc ->" + this.quantity)
  }
}
