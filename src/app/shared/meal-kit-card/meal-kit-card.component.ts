import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/core/login/login.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Chef, DataService, TrendingMenu } from 'src/app/core/services/data.service';
import { TrendingMenuCartService } from 'src/app/core/services/trending-menu-cart.service';
import { mealKitVM } from '../models/MealKitsVM.model';
import { trendingMenuVM } from '../models/trendingMenuVM.model';

@Component({
  selector: 'app-meal-kit-card',
  templateUrl: './meal-kit-card.component.html',
  styleUrls: ['./meal-kit-card.component.css']
})
export class MealKitCardComponent implements OnInit, OnDestroy {

  @ViewChild('paginatorChefs') paginator: MatPaginator;

  @Input() cards: any;
  cardsArr;

  @Input() dashboardMealKits: boolean;
  @Input() mealKitPage: boolean;

  @Input() cardTitle: string;
  @Input() cardImage: string;
  @Input() cardPrice: string;
  @Input() cardDescription: string;
  @Input() title: string;

  // for filters tab
  @Input() reverseRating: string;
  @Input() reversePrice: string;
  @Input() reverseFamily: string;
  @Input() reverseDuration: string;
  @Input() attribute: string;


  // for search bar
  @Input() searchText: string;
  @Input() isActive: string;

  // paginator pageSize
  @Input() pageSizeNumber: number;

  @Input() urlRoute: string;

  start = 0;
  end = 100;

  // temp variable
  amount: number = 0;

  next = true;
  previous = false;
  dataSource: MatTableDataSource<Chef>;
  public innerWidth: any;
  mobileScreen = false

  constructor(private authService: AuthService, public dialog: MatDialog, private dataService: DataService, private cartSerivce: TrendingMenuCartService) { }

  ngOnInit(): void {
    this.cards.subscribe(mealkit => {
      this.dataSource = new MatTableDataSource<mealKitVM>(mealkit);
      this.cards = this.dataSource.connect();
      this.cardsArr = mealkit;
    });
    this.innerWidth = window.innerWidth;
  }
  NextScreen() {
    this.dataSource.paginator.nextPage();
    this.previous = true;
    if (!this.dataSource.paginator.hasNextPage())
      this.next = false;
  }
  PreviousScreen() {
    this.dataSource.paginator.previousPage();
    this.next = true;
    if (!this.dataSource.paginator.hasPreviousPage()) {
      this.previous = false;
    }
  }
  likePost(card) {
    if (!this.authService.isLoggedIn()) {
      this.dialog.open(LoginComponent);
    }
    else {
      if (card.liked) {
        this.dataService.UnLikeTrendingMealKits(card);
        card.likes--;
        card.liked = false;
      }
      else {
        this.dataService.LikeTrendingMealKits(card);
        card.likes++;
        card.liked = true;
      }
    }
  }
  @Output() newItemEvent = new EventEmitter<number>();
  @Output() oldItemEvent = new EventEmitter<number>();


  addNewItem(value: number) {
    this.newItemEvent.emit(value);
  }
  oldNewItem(value: number) {
    this.oldItemEvent.emit(value);
  }

  addToLocalStorage(card: any, onRemove?: boolean) {
    this.cartSerivce.addToLocalStorage(card);
  }
  addAmount(card: any) {
    if (this.authService.isLoggedIn() == false) {
      this.dialog.open(LoginComponent, {
        width: '446px',
        height: '572px',
      });
    }
    else {
      this.addToLocalStorage(card);
      this.addNewItem(1);
    }

  }
  removeAmount(card: any) {
    this.removeFromLocalStorage(card);
    this.oldNewItem(1);
  }
  cropString(str: string) {
    if (str.length > 30 && this.innerWidth > 425)
      return str.slice(0, 26) + "...";
    return str.slice(0, 16) + "...";
  }
  ngOnDestroy(): void {
    this.cards.unsubscribe();
  }
  getQuantity(card: any) {
    return this.cartSerivce.getQuantity(card);
  }
  removeFromLocalStorage(card: any) {
    this.cartSerivce.removeFromLocalStorage(card);
  }

}
