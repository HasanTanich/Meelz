import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { TrendingMenuCartService } from '../services/trending-menu-cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isActive: boolean;
  searchText: string;
  quantity:number;
  reverseRating: boolean;
  reverseStyle: boolean;
  reverseFamily: boolean;
  reversePrice: boolean;

  condition = false;
  next = true;
  previous = false;

  allTrendingMenu: Observable<any>;
  allMenuArr;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // dataSource: MatTableDataSource<Card>;

  constructor(private authService: AuthService, public dialog: MatDialog, private dataService: DataService,private cartService:TrendingMenuCartService) { }

  ngOnInit(): void {
    this.quantity=this.cartService.getAllLocalStorage();
    this.condition = this.authService.isLoggedIn(); // return true is user is logged in
    this.allTrendingMenu = this.dataService.getTrendingMenu();  // get all Trending Menu from database

    this.allTrendingMenu.subscribe(menu => {
      this.allMenuArr = menu;
      // this.dataSource = new MatTableDataSource<Card>(this.allMenuArr);
      // this.dataSource.paginator = this.paginator;
      // this.allTrendingMenu = this.dataSource.connect();
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
