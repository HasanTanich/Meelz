import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { TrendingMenuCartService } from '../services/trending-menu-cart.service';

@Component({
  selector: 'app-meal-kits',
  templateUrl: './meal-kits.component.html',
  styleUrls: ['./meal-kits.component.css']
})
export class MealKitsComponent implements OnInit {
  isActive: boolean;
  searchText: string;

  reverseRating: boolean;
  reverseStyle: boolean;
  reverseFamily: boolean;
  reversePrice: boolean;

  condition = false;
  next = true;
  previous = false;

  mealKits: Observable<any>;
  mealKitsArray;
  quantity:number;

  constructor(private authService: AuthService, public dialog: MatDialog, private dataService: DataService,private cartService:TrendingMenuCartService) { }

  ngOnInit(): void {
    this.quantity=this.cartService.getAllLocalStorage();

    this.condition = this.authService.isLoggedIn(); // return true is user is logged in
    this.mealKits = this.dataService.getTrendingMealKits();  // get all Trending meal kits from database

    this.mealKits.subscribe(mealkit => {
      this.mealKitsArray = mealkit;
      // this.dataSource = new MatTableDataSource<Card>(this.mealKitsArray);
      // this.dataSource.paginator = this.paginator;
      // this.mealKits = this.dataSource.connect();
    });

    // this.changeDetectorRef.detectChanges();
    window.scroll(0, 0);
  }

  onIsActive(value: boolean) {
    this.isActive = value;
  }
  onIsActiveChanged(value: any) {
    this.isActive = value;
    this.searchText = value.text;
  }
  onSortRating(value: boolean) {
    this.reverseRating = value;
  }
  onSortStyle(value: boolean) {
    this.reverseStyle = value;
  }
  onSortFamily(value: boolean) {
    this.reverseFamily = value;
  }
  onSortPrice(value: boolean) {
    this.reversePrice = value;
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