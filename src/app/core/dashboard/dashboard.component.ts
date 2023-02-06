import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { TrendingMenuCartService } from '../services/trending-menu-cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  constructor(private dataService: DataService, private cartService: TrendingMenuCartService) { }

  chefsObs: Observable<any>;
  masterClassObs: Observable<any>;
  trendingMenuObs: Observable<any>;
  trendingMealKitsObs: Observable<any>;
  chefsTableObs: Observable<any>;
  blogObs: Observable<any>;
  chefStoreObs: Observable<any>;

  @Input() quantity = 0;
  @Input() quantity1: number;

  pageSize: number;
  chefTablePageSize: number;

  ngOnInit(): void {

    if (window.innerWidth <= 480) {
      this.pageSize = 2;
      this.chefTablePageSize = 2;
    }
    else if (window.innerWidth <= 768) {
      this.pageSize = 3;
      this.chefTablePageSize = 3;
    }
    else {
      this.pageSize = 4;
      this.chefTablePageSize = 3;
    }

    this.chefsObs = this.dataService.getAllChefs();
    this.masterClassObs = this.dataService.getAllMasterClasses1();
    this.trendingMenuObs = this.dataService.getTrendingMenu();
    this.trendingMealKitsObs = this.dataService.getTrendingMealKits();

    this.chefsTableObs = this.dataService.getAllChefTables();
    this.blogObs = this.dataService.getAllBlogs();
    this.chefStoreObs = this.dataService.getAllChefStoreItems();
    this.quantity = this.cartService.getTrendingMenuCartNumberofItems();
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
