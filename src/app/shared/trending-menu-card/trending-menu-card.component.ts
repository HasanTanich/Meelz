import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { LoginComponent } from 'src/app/core/login/login.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { TrendingMenuCartService } from 'src/app/core/services/trending-menu-cart.service';
import { Chef, DataService } from "../../core/services/data.service";
import { trendingMenuVM } from '../models/trendingMenuVM.model';
@Component({
  selector: 'app-trending-menu-card',
  templateUrl: './trending-menu-card.component.html',
  styleUrls: ['./trending-menu-card.component.css']
})
export class TrendingMenuCardComponent implements OnInit, OnDestroy {

  @ViewChild('paginatorChefs') paginator: MatPaginator;

  @Input() cards: any;
  cardsArr;
  @Input() seeAll = false;
  @Input() dashboardMenu: boolean;
  @Input() dashboardMenu1: boolean;

  @Input() dashboardChefTable: boolean;
  @Input() dashboardChefs: boolean;
  @Input() chefsPage: boolean;
  @Input() menuPage: boolean;
  @Input() chefTablePage: boolean;

  @Input() cardTitle: string;
  @Input() cardImage: string;
  @Input() cardPrice: string;
  @Input() cardDescription: string;
  @Input() title: string;
  @Input() attribute: string;

  @Input() reverseName: string;
  @Input() reverseRating: string;
  @Input() reversePrice: string;
  @Input() reverseFamily: string;
  @Input() reverseDuration: string;
  @Input() reverseSeats: string;
  @Input() searchText: string;
  @Input() isActive: string;

  @Input() pageSizeNumber: number;
  @Input() urlRoute: string;

  start = 0;
  end = 100;
  chefs;


  pageSize = 4;
  next = true;
  previous = false;
  dataSource: MatTableDataSource<trendingMenuVM>;

  public innerWidth: any;
  mobileScreen = false
  NotLogged = false;
  constructor(private authService: AuthService, public dialog: MatDialog, public dataService: DataService, private cartSerivce: TrendingMenuCartService) { }

  ngOnInit(): void {
    this.cards.subscribe(chef => {
      this.dataSource = new MatTableDataSource<trendingMenuVM>(chef);
      this.cards = this.dataSource.connect();
      this.cardsArr = chef;
    });
    this.innerWidth = window.innerWidth;

    if (this.authService.isLoggedIn() == false)
      this.NotLogged = true;

    // this.cartSerivce.getAllLocalStorage();


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
    console.log(card);
    if (!this.authService.isLoggedIn()) {
      this.dialog.open(LoginComponent);
    }
    else {
      if (card.liked == true) {
        this.dataService.UnLikeTrendingMenu(card);
        card.likes--;
        card.liked = false;
      }
      else {
        this.dataService.LikeTrendingMenu(card);
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
  getCardQuantity(card: any) {
    return this.cartSerivce.getTrendingMenuCardQuantity(card);
  }
  cropString(str: string) {
    if (str.length > 30 && this.innerWidth > 425)
      return str.slice(0, 26) + "...";
    return str.slice(0, 16) + "...";
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let broj = 415;
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
    if (this.innerWidth < broj)
      this.mobileScreen = true;
    else
      this.mobileScreen = false;
  }

  addToLocalStorage(card: any, onRemove?: boolean) {
    this.cartSerivce.addToLocalStorage(card);
  }
  removeFromLocalStorage(card: any) {
    this.cartSerivce.removeFromLocalStorage(card);
  }
  getQuantity(card: any) {
    return this.cartSerivce.getQuantity(card);
  }
  ngOnDestroy(): void {
    this.cards.unsubscribe();
  }
}
